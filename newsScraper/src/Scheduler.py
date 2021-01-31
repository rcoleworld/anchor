import json
from Crawler.CNNCrawler import CNNCrawler
from Putter.BasePutter import BasePutter
from Transformer.CNNTransformer import CNNTransformer

class Scheduler:
    configs = {}
    queue = {}
    putter = None
    transformers = {}

    def __init__(self):
        self.load_configs()
        self.create_queue()
        try:
            self.putter = BasePutter()
        except Exception as e:
            print(f"Backend Connection Failed:\n{e}")
            exit(-1)
        self.parse_queue()

    def load_configs(self):
        """
        Reads in external configuration data
        """
        with open("config.json", "r") as read_configs:
            self.configs = json.load(read_configs)

    def create_cnn_queue(self, query: str) -> dict:
        """
        Returns queue of articles to parse for CNN

        input: a query to search for
        return: a dict to append to the general queue
        """
        cnn_crawler = CNNCrawler()
        return {"cnn": cnn_crawler.articles_list}

    def create_queue(self):
        """
        Creates a general queue of articles to parse
        """
        function_mapping = {
            "cnn": self.create_cnn_queue,
        }
        transformer_mapping = {
            "cnn": CNNTransformer,
        }

        for website in self.configs.get("websites"):
            self.queue.update(function_mapping.get(website.get("website_name"))(website.get("query")))
            
            self.transformers.update({website.get("website_name"): transformer_mapping.get(website.get("website_name"))()})
            
    
    def parse_queue(self):
        """
        Parses queue for each website enabled and puts into the database
        """
        for website in self.queue:
            for article in self.queue.get(website):
                t = self.transformers.get(website).transform(article)
                if t is not None:
                    self.putter.put_article(t)
s = Scheduler()