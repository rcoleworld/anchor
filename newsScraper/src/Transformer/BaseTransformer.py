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
    saved_model_path = "./_combinedBaisDetection"
    model_loaded = tf.keras.models.load_model(saved_model_path)

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
        passthrough = raw
        #clean out things that don't tokenize well
        raw = pt.remove_html(raw)
        raw = pt.remove_url(raw)

        #break into sentences
        sent_detector = nltk.data.load('tokenizers/punkt/english.pickle')
        sentenceTouple = sent_detector.tokenize(raw)
        newtuple = []
        for element in range(len(sentenceTouple)):
            newtuple.append(pt.clean_lower(pt.remove_nonalphanumeric(sentenceTouple[element])))

        res = []
        ave = 0
        for element in newtuple:
            if element == None or element == "":
                res.append(-1)
                continue
            padded = pt.padInput(newtuple,element)
            res.append(float(tf.sigmoid(self.model_loaded(tf.constant([padded])))[0][0]))
            ave += res[-1]
        ave = ave/ len(res)
        #evaluate the sentence
        out = []
        for element in range(len(sentenceTouple)):
            out.append((sentenceTouple[element],res[element]))
        self.transformed_data["body"] = out
        self.transformed_data["average"] = ave
