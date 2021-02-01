from .BaseCrawler import BaseCrawler
import requests
import json

class CNNCrawler(BaseCrawler):
    articles_list = []

    def __init__(self, query="*", num_of_articles=500):
        self.articles_list = self.get_articles("https://search.api.cnn.io/content?q=" + query + "&sort=newest&size=50&from={}", num_of_articles)

    def get_articles(self, endpoint: str, num_of_articles=500):
        articles = []
        with requests.Session() as req:
            r = ""
            for item in range(1, num_of_articles, 50):
                r = req.get(endpoint.format(item))
                obj = json.loads(r.text)
                for article in obj.get("result"):
                    articles.append(article)
        self.articles_list = articles
        return articles

if __name__ == '__main__':
    c = CNNCrawler()