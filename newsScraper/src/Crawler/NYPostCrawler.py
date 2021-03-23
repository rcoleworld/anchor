from BaseCrawler import BaseCrawler
from bs4 import BeautifulSoup
import requests
import feedparser

class NYPostCrawler(BaseCrawler):
    articles_list = []

    def __init__(self, config, num_of_articles=500):
        self.articles_list = self.get_articles("https://nypost.com/feed")

    def get_articles(self, endpoint: str):
        articles = []
        feed = feedparser.parse(endpoint)

        return articles

def testing():
    feed = feedparser.parse("https://nypost.com/feed")

    e = feed.entries[0]
    print(e.get("links")[0].get("href"))
    req = requests.get(e.get("links")[0].get("href"))

    soup = BeautifulSoup(req.content, 'html.parser')

    text = soup.find('div', class_="entry-content entry-content-read-more")
    article_body = text.find_all('p')
    for p in article_body:
        print(p)

if __name__ == '__main__':
    testing()