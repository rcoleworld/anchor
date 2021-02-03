#!/usr/bin/env python3

import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text as text
from official.nlp import optimization
import matplotlib.pyplot as plt
import tensorflow_model_optimization as tfmot


saved_model_path = "./_combinedBaisDetection"
model_loaded = tf.keras.models.load_model(saved_model_path)

examples = ["example string"]
res = tf.sigmoid(model_loaded(tf.constant(examples)))

for i in range(len(examples)):
	print(f"example: {examples[i]} Sentiment {res[i]}")
