from .BaseCrawler import BaseCrawler
import requests
import json
from bs4 import BeautifulSoup

class NYTCrawler(BaseCrawler):
    articles_list = []

    def __init__(self, config, num_of_articles=500):
        self.articles_list = self.get_articles("https://api.nytimes.com/svc/search/v2/articlesearch.json?page={}&api-key="+ config.get('api_key'), num_of_articles)

    def get_articles(self, endpoint: str, num_of_articles=500):
        articles = []
        r = ""
        for item in range(1, num_of_articles//10+1):
            with requests.Session() as req:
                r = req.get(endpoint.format(item))
                obj = json.loads(r.text)
                for article in obj.get("response").get("docs"):
                    if article['document_type'] == "article":
                        if article['multimedia'] != []:
                            page = requests.get(article.get("web_url"))
                            soup = BeautifulSoup(page.content, 'html.parser')
                            article_text = soup.find_all('p', class_='css-axufdj evys1bk0')
                            article_body = ""
                            for articlepg in article_text:
                                article_body += articlepg.get_text() + "\n"
                            article.update({"body": article_body})
                            articles.append(article)

        self.articles_list = articles
        return articles

if __name__ == '__main__':
    c = NYTCrawler()