from .BaseTransformer import BaseTransformer

class FoxNewsTransformer(BaseTransformer):
    def __init__(self):
        pass

    def transform(self, raw_article: dict):

        """
        Modifies raw Fox article data into format needed for database
        
        Input:
        dict: raw_article - unmodified article data from Fox

        Return:
        dict: transformed_data - modified article data
        """
        combined_body = ""
        for component in raw_article.get("attributes").get("components"):
            if(component.get("content_type") == "text"):
                combined_body+=component.get("content").get("text")


        self.transformed_data = {"id": raw_article.get('id'), 
                "url": raw_article["attributes"].get("canonical_url"), 
                "firstPublishDate": raw_article["attributes"].get("publication_date"),
                "lastPublishDate": raw_article["attributes"].get("last_published_date"),
                "contributors": raw_article['meta']["chartbeat"].get("authors"),
                "headline": raw_article["attributes"].get("title"),
                "section": raw_article['meta']["chartbeat"].get("section"),
                "thumbnail": raw_article["attributes"]["thumbnail"].get("url"),
                "body": combined_body
                }
        return self.transformed_data