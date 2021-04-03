from .BaseTransformer import BaseTransformer
import dateutil


class NYPostTransformer(BaseTransformer):
    def __init__(self):
        pass

    def transform(self, raw_article: dict):

        """
        Modifies raw NYPost article data into format needed for database
        
        Input:
        dict: raw_article - unmodified article data from NYPost

        Return:
        dict: transformed_data - modified article data
        """
        self.transformed_data = None

        contributors = []

        dt = dateutil.parser.parse(raw_article['published'])
        contrib = raw_article["authors"][0]['name'].split(", ")

        self.transformed_data = {"url": raw_article['link'], 
                "firstPublishDate": str(dt),
                "lastPublishDate": str(dt),
                "contributors": contrib,
                "headline": raw_article['title'],
                "section": raw_article['section'],
                "thumbnail": raw_article['thumbnail'],
                "body": raw_article['body'],
                "category": raw_article['section'],
                "publisher": "New York Post"
                }
        return self.transformed_data