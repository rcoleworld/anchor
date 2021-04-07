import json
from Crawler.FoxNewsCrawler import FoxNewsCrawler
from Transformer.FoxNewsTransformer import FoxNewsTransformer
from Crawler.CNNCrawler import CNNCrawler
from Putter.BasePutter import BasePutter
from Transformer.CNNTransformer import CNNTransformer
from Crawler.NYTCrawler import NYTCrawler
from Transformer.NYTTransformer import NYTTransformer
from Crawler.NYPostCrawler import NYPostCrawler
from Transformer.NYPostTransformer import NYPostTransformer

class Scheduler:
    configs = {}
    queue = {}
    putter = None
    transformers = {}

    def __init__(self):
        pass

    def load_configs(self):
        """
        Reads in external configuration data
        """
        with open("config.json", "r") as read_configs:
            self.configs = json.load(read_configs)

    def create_cnn_queue(self, config) -> dict:
        """
        Returns queue of articles to parse for CNN

        input: a query to search for
        return: a dict to append to the general queue
        """
        cnn_crawler = CNNCrawler(config=config, num_of_articles=50)
        return {"cnn": cnn_crawler.articles_list}

    def create_fox_queue(self, config) -> dict:
        """
        Returns queue of articles to parse for Fox News

        input: a query to search for
        return: a dict to append to the general queue
        """
        fox_crawler = FoxNewsCrawler(config=config, num_of_articles=50)
        return {"fox": fox_crawler.articles_list}

    def create_nyt_queue(self, config) -> dict:
        """
        Returns queue of articles to parse for Fox News

        input: a query to search for
        return: a dict to append to the general queue
        """
        nyt_crawler = NYTCrawler(config=config, num_of_articles=50)
        return {"nyt": nyt_crawler.articles_list}
        
    def create_nypost_queue(self, config) -> dict:
        """
        Returns queue of articles to parse for Fox News

        input: a query to search for
        return: a dict to append to the general queue
        """
        nypost_crawler = NYPostCrawler(config=config, num_of_articles=50)
        return {"nypost": nypost_crawler.articles_list}

    def create_queue(self):
        """
        Creates a general queue of articles to parse
        """
        function_mapping = {
            "cnn": self.create_cnn_queue,
            "fox": self.create_fox_queue,
            "nypost": self.create_nypost_queue,
            "nyt": self.create_nyt_queue,
        }
        transformer_mapping = {
            "cnn": CNNTransformer,
            "fox": FoxNewsTransformer,
            "nypost": NYPostTransformer,
            "nyt": NYTTransformer,
        }
        for website in self.configs.get("websites"):
            self.queue.update(function_mapping.get(website.get("website_name"))(config=website))

            self.transformers.update({website.get("website_name"): transformer_mapping.get(website.get("website_name"))()})


    def parse_queue(self):
        """
        Parses queue for each website enabled and puts into the database
        """

        for website in self.queue:
            for article in self.queue.get(website):
                t = self.transformers.get(website).transform(article)
                if self.transformers.get(website).transformed_data is not None:
                    #self.transformers.get(website).run_ai()
                    self.putter.put_article(self.transformers.get(website).transformed_data)
                    # testing return
                    #return t

if __name__ == '__main__':
    s = Scheduler()
    s.load_configs()
    try:
        s.putter = BasePutter(s.configs)
    except Exception as e:
        print(f"Backend Connection Failed:\n{e}")
        exit(-1)
    s.create_queue()
    s.parse_queue()
