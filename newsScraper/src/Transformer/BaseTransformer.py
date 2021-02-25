import nltk.data
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'
import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text as text
from official.nlp import optimization
import tensorflow_model_optimization as tfmot
import sys
sys.path.append("./Transformer")
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
        tf.device('/cpu:0')
        #get the raw data
        raw = self.transformed_data["body"]

        #clean out things that don't tokenize well
        raw = pt.remove_html(raw)
        raw = pt.remove_url(raw)
        raw = pt.clean_lower(raw)

        #break into sentences
        sent_detector = nltk.data.load('tokenizers/punkt/english.pickle')
        sentenceTouple = sent_detector.tokenize(raw)
        newtuple = []
        for element in range(len(sentenceTouple)):
            newtuple.append(pt.remove_nonalphanumeric(sentenceTouple[element]))
        
        #load the BERT
        saved_model_path = "./_improvedBaisDetection"
        model_loaded = tf.keras.models.load_model(saved_model_path)
        print("made it here")
        res = []
        for element in newtuple:
            print(element)
            if element == None:
                res.append(-1)
                continue
            res.append(tf.sigmoid(model_loaded(tf.constant(element))))
            print(f"string: {element} Score: {res[-1]}")
        #evaluate the sentence

        #format the output
        out = []
        for element in range(len(sentenceTouple)):
            out.append((sentenceTouple[element],res[element]))

        self.transformed_data["body"] = out
