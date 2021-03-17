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
        self.transformed_data = None
        combined_body = ""
        for component in raw_article.get("attributes").get("components"):
            if(component.get("content_type") == "text"):
                element = component.get("content").get("text")
                if "<p><strong><a href=" not in element:
                    combined_body += element + "\n"


        self.transformed_data = {"url": raw_article["attributes"].get("canonical_url"), 
                "firstPublishDate": raw_article["attributes"].get("publication_date"),
                "lastPublishDate": raw_article["attributes"].get("last_published_date"),
                "contributors": raw_article['meta']["chartbeat"].get("authors"),
                "headline": raw_article["attributes"].get("title"),
                "section": raw_article['meta']["chartbeat"].get("section"),
                "thumbnail": raw_article["attributes"]["thumbnail"].get("url"),
                "body": combined_body,
                "category": raw_article['meta']["chartbeat"].get("section"),
                "publisher": "Fox News"
                }
        return self.transformed_data