import requests

class BasePutter:
    article_db_creds = None
    media_store_creds = None
    db_session = None
    media_store = None

    def __init__(self, configs):
        self.article_db_creds = configs.get("article_db_creds")

    def create_db_connection(self):
        pass

    def create_media_store_connection(self):
        pass

    def put_media(self):
        pass

    def put_article(self, article):
        ret_val = requests.post(self.article_db_creds, json = article)
        print(ret_val)
