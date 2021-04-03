from .BaseCrawler import BaseCrawler
from bs4 import BeautifulSoup
import requests
import json
import feedparser

class NYPostCrawler(BaseCrawler):
    articles_list = []

    def __init__(self, config, num_of_articles=500):
        self.articles_list = self.get_articles("https://nypost.com/feed")

    def get_articles(self, endpoint: str):
        articles = []
        feed = feedparser.parse(endpoint)
        for entry in feed.entries:
                with requests.Session() as r:
                    req = r.get(entry.get("links")[0].get("href"))
                    soup = BeautifulSoup(req.content, 'html.parser')

                    try:
                        section_tags = soup.find('p', class_="section-tag")
                        section = section_tags.find('a')
                        text = soup.find('div', class_="entry-content entry-content-read-more")
                        article_body = text.find_all('p')
                        thumbnail = entry['media_content'][0]["url"]
                    except:
                        continue
                    final_body = ""
                    for p in article_body:
                        final_body += p.get_text() + "\n"
                    entry.update({"body": final_body})
                    entry.update({"section": section.get_text()})
                    entry.update({"thumbnail": thumbnail})
                    articles.append(entry)
        return articles


if __name__ == '__main__':
    pass