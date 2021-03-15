from .BaseCrawler import BaseCrawler
import requests
import json

class FoxNewsCrawler(BaseCrawler):
    articles_list = []

    def __init__(self, config, num_of_articles=500):
        self.articles_list = self.get_articles("https://api.foxnews.com/v3/articles?size=50&from={}", num_of_articles)

    def get_articles(self, endpoint: str, num_of_articles=500):
        articles = []
        r = ""
        for item in range(1, num_of_articles, 50):
            with requests.Session() as req:
                r = req.get(endpoint.format(item))
                obj = json.loads(r.text)
                try:
                    for article in obj.get("data"):
                        articles.append(article)
                except:
                    continue

        self.articles_list = articles
        return articles

if __name__ == '__main__':
    c = FoxNewsCrawler()