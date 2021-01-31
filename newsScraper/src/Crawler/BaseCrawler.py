
class BaseCrawler:
    website_url = None
    webpage_data = None
    already_crawled = False

    def __init__(self):
        pass

    def get_articles(self, url = None):
        pass

    def get_images(self):
        pass

    def get_links(self):
        pass

