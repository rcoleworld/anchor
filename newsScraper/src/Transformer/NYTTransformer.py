from .BaseTransformer import BaseTransformer

class NYTTransformer(BaseTransformer):
    def __init__(self):
        pass

    def transform(self, raw_article: dict):

        """
        Modifies raw NYT article data into format needed for database
        
        Input:
        dict: raw_article - unmodified article data from CNN

        Return:
        dict: transformed_data - modified article data
        """
        self.transformed_data = None

        contributors = []
        for element in raw_article['byline']['person']:
            contributors.append(element['firstname'] + (" " + element.get('lastname') if element.get('lastname') != None else ""))

        try:
            thumbnail = "https://www.nytimes.com" + raw_article.get('multimedia')[0]['url']
        except:
            thumbnail = ""

        self.transformed_data = {"url": raw_article['web_url'], 
                "firstPublishDate": raw_article['pub_date'],
                "lastPublishDate": raw_article['pub_date'],
                "contributors": contributors,
                "headline": raw_article['headline']['main'],
                "section": raw_article['section_name'],
                "thumbnail": thumbnail,
                "body": raw_article['body'],
                "category": raw_article['news_desk'],
                "publisher": "The New York Times"
                }
        return self.transformed_data