import nltk.data
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text as text
from official.nlp import optimization
import tensorflow_model_optimization as tfmot
import PreprocessingTools as pt
class BaseTransformer:
    input_data = None
    transformed_data = None

    def __init__(self):
        pass

    def transform(self):
        pass

    def get_article_text(self):
        pass

    def get_metadata(self):
        pass

    def run_ai(self):
        #get the raw data
        raw = self.transformed_data["body"]

        #clean out things that don't tokenize well
        raw = pt.remove_html(raw)
        raw = pt.remove_url(raw)
        raw = clean_lower(raw)

        #break into sentences
        sent_detector = nltk.data.load('tokenizers/punkt/english.pickle')
        sentenceTouple = sent_detector.tokenize(raw)

        for element in range(len(sentenceTouple)):
            sentenceTouple[element] = remove_nonalphanumeric(sentenceTouple[element])

        #load the BERT
        saved_model_path = "./_improvedBaisDetection"
        model_loaded = tf.keras.models.load_model(saved_model_path)

        #evaluate the sentence
        res = tf.sigmoid(model_loaded(tf.constant(sentenceTouple)))

        #format the output
        out = []
        for element in range(len(sentenceTouple)):
            out.append((sentenceTouple[element],res[element]))

        self.transformed_data["body"] = out
