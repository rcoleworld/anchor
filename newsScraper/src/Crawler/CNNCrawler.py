from Crawler.BaseCrawler import *
import requests
import json

class CNNCrawler(BaseCrawler):
    articles_list = []

    def __init__(self, query="*"):
        self.articles_list = self.get_articles("https://search.api.cnn.io/content?q=" + query + "&sort=newest&size=50&from={}")

    def get_articles(self, endpoint: str):
        articles = []
        with requests.Session() as req:
            for item in range(1, 500, 50):
                r = req.get(endpoint.format(item)).json()
                for article in r.get("result"):
                    articles.append(article)
        return articles

c = CNNCrawler()