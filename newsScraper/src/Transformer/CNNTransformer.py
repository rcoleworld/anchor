from .BaseTransformer import BaseTransformer

class CNNTransformer(BaseTransformer):
    def __init__(self):
        pass

    def transform(self, raw_article: dict):

        """
        Modifies raw CNN article data into format needed for database
        
        Input:
        dict: raw_article - unmodified article data from CNN

        Return:
        dict: transformed_data - modified article data
        """
        if raw_article['type'] == "article":
            self.transformed_data = {"url": raw_article['url'], 
                    "firstPublishDate": raw_article['firstPublishDate'],
                    "lastPublishDate": raw_article['lastPublishDate'],
                    "contributers": raw_article['contributors'],
                    "headline": raw_article['headline'],
                    "section": raw_article['section'],
                    "thumbnailUrl": raw_article['thumbnail'],
                    "body": raw_article['body'],
                    "category": raw_article['section'],
                    "publisher": "cnn"
                    }
            return self.transformed_data
        else:
            return None
