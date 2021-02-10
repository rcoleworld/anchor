#!/usr/bin/env python3
import wandb
from wandb.keras import WandbCallback
import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text as text
from official.nlp import optimization
import matplotlib.pyplot as plt
import os
import shutil
wandb.init(project="anchor", entity="icepu", sync_tensorboard=True)

tf.config.optimizer.set_jit(True)
tf.get_logger().setLevel('ERROR')
AUTOTUNE = tf.data.experimental.AUTOTUNE

batch_size = 32
seed = 42
#build the dataset
raw_train_ds = tf.keras.preprocessing.text_dataset_from_directory(
	'/home/ice/code/datasets/news/archive/train',
	batch_size=batch_size,
	validation_split=0.2,
	subset='training',
	seed=seed)

class_names = raw_train_ds.class_names
train_ds = raw_train_ds.cache().prefetch(buffer_size=AUTOTUNE)

val_ds = tf.keras.preprocessing.text_dataset_from_directory(
	'/home/ice/code/datasets/news/archive/train',
	batch_size=batch_size,
	validation_split=0.2,
	subset='validation',
	seed=seed)

val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)
test_ds = tf.keras.preprocessing.text_dataset_from_directory(
	'/home/ice/code/datasets/news/archive/test',
	batch_size=batch_size)

test_ds = test_ds.cache().prefetch(buffer_size=AUTOTUNE)
bert_model_name = 'bert_en_uncased_L-12_H-768_A-12'

#build the model
map_name_to_handle = {
	'bert_en_uncased_L-12_H-768_A-12':
		'https://tfhub.dev/tensorflow/bert_en_uncased_L-12_H-768_A-12/3'}
map_model_to_preprocess = {
	'bert_en_uncased_L-12_H-768_A-12':
		'https://tfhub.dev/tensorflow/bert_en_uncased_preprocess/2'}

tfhub_handle_encoder = map_name_to_handle[bert_model_name]
tfhub_handle_preprocess = map_model_to_preprocess[bert_model_name]

#we use the a bert encoder as the input layer then apply two dense layers and finally a maxing layer
def build_classifier_model():
	text_input = tf.keras.layers.Input(shape=(), dtype=tf.string, name='text')
	preprocessing_layer = hub.KerasLayer(tfhub_handle_preprocess, name='preprocessing')
	encoder_inputs = preprocessing_layer(text_input)
	encoder = hub.KerasLayer(tfhub_handle_encoder, trainable=True, name='BERT_encoder')
	outputs = encoder(encoder_inputs)
	net = outputs['pooled_output']
	net = tf.keras.layers.Dropout(0.3)(net)
	net = tf.keras.layers.Dense(40, activation=tf.nn.relu, name='classifier')(net)
	net = tf.keras.layers.Dropout(0.1)(net)
	net = tf.keras.layers.Dense(1, activation=tf.nn.sigmoid, name='mined')(net)
	return tf.keras.Model(text_input, net)

#train
classifier_model = build_classifier_model()
loss = tf.keras.losses.BinaryCrossentropy(from_logits=True)
metrics = tf.metrics.BinaryAccuracy()
epochs = 10
steps_per_epoch = 0.1*tf.data.experimental.cardinality(train_ds).numpy()
num_train_steps = steps_per_epoch * epochs
num_warmup_steps = int(0.1*num_train_steps)
init_lr = 3e-5
optimizer = optimization.create_optimizer(init_lr=init_lr,
				num_train_steps=num_train_steps,
				num_warmup_steps=num_warmup_steps,
				optimizer_type='adamw')

classifier_model.compile(optimizer=optimizer,
						loss=loss,
						metrics=metrics)

history = classifier_model.fit(x=train_ds,
								validation_data=val_ds,
								epochs=epochs,callbacks=[WandbCallback()])
loss, accuracy = classifier_model.evaluate(test_ds)
saved_model_path = './_improvedBaisDetection'
classifier_model.save(saved_model_path,include_optimizer=False)
#tells us where we are at in the training process
print(f'Loss: {loss}')
print(f'Accuracy: {accuracy}')
history_dict = history.history
print(history_dict.keys())
acc = history_dict['binary_accuracy']
val_acc = history_dict['val_binary_accuracy']
loss = history_dict['loss']
val_loss = history_dict['val_loss']

epochs = range(1, len(acc) + 1)
fig = plt.figure(figsize=(10, 6))
fig.tight_layout()

plt.subplot(2, 1, 1)
# "bo" is for "blue dot"
plt.plot(epochs, loss, 'r', label='Training loss')
# b is for "solid blue line"
plt.plot(epochs, val_loss, 'b', label='Validation loss')
plt.title('Training and validation loss')
# plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.legend()

plt.subplot(2, 1, 2)
plt.plot(epochs, acc, 'r', label='Training acc')
plt.plot(epochs, val_acc, 'b', label='Validation acc')
plt.title('Training and validation accuracy')
plt.xlabel('Epochs')
plt.ylabel('Accuracy')
plt.legend(loc='lower right')
plt.show()


#save
