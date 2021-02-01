import unittest
from unittest.mock import Mock, patch, mock_open
import sys
sys.path.append("../src")
import json
from Transformer.CNNTransformer import CNNTransformer
from Crawler.CNNCrawler import CNNCrawler
import Crawler.CNNCrawler
from Scheduler import Scheduler

class TestScheduler(unittest.TestCase):
    scheduler = Scheduler()
    def test_load_configs(self):
        mock_open_ret_val = "{\
            \"test_db_creds\": {\
                \"user\": \"user\",\
                \"password\": \"password\"\
            },\
            \"media_store_creds\": {\
                \"user\": \"user\",\
                \"password\": \"password\"\
            },\
            \"websites\": [\
                {\
                    \"website_name\": \"cnn\", \
                    \"website_url\": \"http://www.cnn.com\",\
                    \"query\": \"*\"\
                }\
            ]\
        }"
        with patch("builtins.open", mock_open(read_data=mock_open_ret_val)) as mock_file:
            self.scheduler.load_configs()
        
        self.assertEqual(self.scheduler.configs, json.loads(mock_open_ret_val))

    @patch.object(Crawler.CNNCrawler.requests.Session, 'get')
    def test_create_cnn_queue(self, mock_get):
        mock_obj = Mock()
        mock_obj.text = """{\"result\": [{\"_id\": \"h_415896d4e64fa3246f35d70c4cd30828\",\
                        \"type\": \"article\",\
                        \"body\": \"Sample Body\",\
                                    \"sourceId\": \"article_1228FDB2-43E1-413C-0FCC-562D988CEACA\",\
                                    \"url\": \"https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html\",\
                                    \"firstPublishDate\": \"2021-01-31T03:51:30Z\",\
                                    \"lastPublishDate\": \"2021-01-31T03:51:30Z\",\
                                    \"lastModifiedDate\": \"2021-01-31T03:51:30Z\",\
                                    \"path\": \"/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer\",\
                                    \"source\": \"cnn\",\
                                    \"location\": null,\
                                    \"byLine\": \"Opinion by Julian Zelizer, CNN Political Analyst\",\
                                    \"contributors\": [\"Julian Zelizer\"],\
                                    \"headline\": \"McConnell's defense of the filibuster is a farce\",\
                                    \"section\": \"opinions\",\
                                    \"mappedSection\": \"OPINION\",\
                                    \"thumbnail\": \"https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg\"}]}"""
        
        mock_get.return_value = mock_obj
        output = self.scheduler.create_cnn_queue()

        # 10x output
        sample_output = {"cnn": [{"_id": "h_415896d4e64fa3246f35d70c4cd30828",\
                        "type": "article",\
                        "body": "Sample Body",\
                        "sourceId": "article_1228FDB2-43E1-413C-0FCC-562D988CEACA",\
                        "url": "https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html",\
                        "firstPublishDate": "2021-01-31T03:51:30Z",\
                        "lastPublishDate": "2021-01-31T03:51:30Z",\
                        "lastModifiedDate": "2021-01-31T03:51:30Z",\
                        "path": "/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer",\
                        "source": "cnn",\
                        "location": None,\
                        "byLine": "Opinion by Julian Zelizer, CNN Political Analyst",\
                        "contributors": ["Julian Zelizer"],\
                        "headline": "McConnell's defense of the filibuster is a farce",\
                        "section": "opinions",\
                        "mappedSection": "OPINION",\
                        "thumbnail": "https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg"},
                        {"_id": "h_415896d4e64fa3246f35d70c4cd30828",\
                        "type": "article",\
                        "body": "Sample Body",\
                        "sourceId": "article_1228FDB2-43E1-413C-0FCC-562D988CEACA",\
                        "url": "https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html",\
                        "firstPublishDate": "2021-01-31T03:51:30Z",\
                        "lastPublishDate": "2021-01-31T03:51:30Z",\
                        "lastModifiedDate": "2021-01-31T03:51:30Z",\
                        "path": "/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer",\
                        "source": "cnn",\
                        "location": None,\
                        "byLine": "Opinion by Julian Zelizer, CNN Political Analyst",\
                        "contributors": ["Julian Zelizer"],\
                        "headline": "McConnell's defense of the filibuster is a farce",\
                        "section": "opinions",\
                        "mappedSection": "OPINION",\
                        "thumbnail": "https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg"},
                        {"_id": "h_415896d4e64fa3246f35d70c4cd30828",\
                        "type": "article",\
                        "body": "Sample Body",\
                        "sourceId": "article_1228FDB2-43E1-413C-0FCC-562D988CEACA",\
                        "url": "https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html",\
                        "firstPublishDate": "2021-01-31T03:51:30Z",\
                        "lastPublishDate": "2021-01-31T03:51:30Z",\
                        "lastModifiedDate": "2021-01-31T03:51:30Z",\
                        "path": "/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer",\
                        "source": "cnn",\
                        "location": None,\
                        "byLine": "Opinion by Julian Zelizer, CNN Political Analyst",\
                        "contributors": ["Julian Zelizer"],\
                        "headline": "McConnell's defense of the filibuster is a farce",\
                        "section": "opinions",\
                        "mappedSection": "OPINION",\
                        "thumbnail": "https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg"},
                        {"_id": "h_415896d4e64fa3246f35d70c4cd30828",\
                        "type": "article",\
                        "body": "Sample Body",\
                        "sourceId": "article_1228FDB2-43E1-413C-0FCC-562D988CEACA",\
                        "url": "https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html",\
                        "firstPublishDate": "2021-01-31T03:51:30Z",\
                        "lastPublishDate": "2021-01-31T03:51:30Z",\
                        "lastModifiedDate": "2021-01-31T03:51:30Z",\
                        "path": "/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer",\
                        "source": "cnn",\
                        "location": None,\
                        "byLine": "Opinion by Julian Zelizer, CNN Political Analyst",\
                        "contributors": ["Julian Zelizer"],\
                        "headline": "McConnell's defense of the filibuster is a farce",\
                        "section": "opinions",\
                        "mappedSection": "OPINION",\
                        "thumbnail": "https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg"},
                        {"_id": "h_415896d4e64fa3246f35d70c4cd30828",\
                        "type": "article",\
                        "body": "Sample Body",\
                        "sourceId": "article_1228FDB2-43E1-413C-0FCC-562D988CEACA",\
                        "url": "https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html",\
                        "firstPublishDate": "2021-01-31T03:51:30Z",\
                        "lastPublishDate": "2021-01-31T03:51:30Z",\
                        "lastModifiedDate": "2021-01-31T03:51:30Z",\
                        "path": "/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer",\
                        "source": "cnn",\
                        "location": None,\
                        "byLine": "Opinion by Julian Zelizer, CNN Political Analyst",\
                        "contributors": ["Julian Zelizer"],\
                        "headline": "McConnell's defense of the filibuster is a farce",\
                        "section": "opinions",\
                        "mappedSection": "OPINION",\
                        "thumbnail": "https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg"},
                        {"_id": "h_415896d4e64fa3246f35d70c4cd30828",\
                        "type": "article",\
                        "body": "Sample Body",\
                        "sourceId": "article_1228FDB2-43E1-413C-0FCC-562D988CEACA",\
                        "url": "https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html",\
                        "firstPublishDate": "2021-01-31T03:51:30Z",\
                        "lastPublishDate": "2021-01-31T03:51:30Z",\
                        "lastModifiedDate": "2021-01-31T03:51:30Z",\
                        "path": "/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer",\
                        "source": "cnn",\
                        "location": None,\
                        "byLine": "Opinion by Julian Zelizer, CNN Political Analyst",\
                        "contributors": ["Julian Zelizer"],\
                        "headline": "McConnell's defense of the filibuster is a farce",\
                        "section": "opinions",\
                        "mappedSection": "OPINION",\
                        "thumbnail": "https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg"},
                        {"_id": "h_415896d4e64fa3246f35d70c4cd30828",\
                        "type": "article",\
                        "body": "Sample Body",\
                        "sourceId": "article_1228FDB2-43E1-413C-0FCC-562D988CEACA",\
                        "url": "https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html",\
                        "firstPublishDate": "2021-01-31T03:51:30Z",\
                        "lastPublishDate": "2021-01-31T03:51:30Z",\
                        "lastModifiedDate": "2021-01-31T03:51:30Z",\
                        "path": "/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer",\
                        "source": "cnn",\
                        "location": None,\
                        "byLine": "Opinion by Julian Zelizer, CNN Political Analyst",\
                        "contributors": ["Julian Zelizer"],\
                        "headline": "McConnell's defense of the filibuster is a farce",\
                        "section": "opinions",\
                        "mappedSection": "OPINION",\
                        "thumbnail": "https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg"},
                        {"_id": "h_415896d4e64fa3246f35d70c4cd30828",\
                        "type": "article",\
                        "body": "Sample Body",\
                        "sourceId": "article_1228FDB2-43E1-413C-0FCC-562D988CEACA",\
                        "url": "https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html",\
                        "firstPublishDate": "2021-01-31T03:51:30Z",\
                        "lastPublishDate": "2021-01-31T03:51:30Z",\
                        "lastModifiedDate": "2021-01-31T03:51:30Z",\
                        "path": "/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer",\
                        "source": "cnn",\
                        "location": None,\
                        "byLine": "Opinion by Julian Zelizer, CNN Political Analyst",\
                        "contributors": ["Julian Zelizer"],\
                        "headline": "McConnell's defense of the filibuster is a farce",\
                        "section": "opinions",\
                        "mappedSection": "OPINION",\
                        "thumbnail": "https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg"}
                        ,{"_id": "h_415896d4e64fa3246f35d70c4cd30828",\
                        "type": "article",\
                        "body": "Sample Body",\
                        "sourceId": "article_1228FDB2-43E1-413C-0FCC-562D988CEACA",\
                        "url": "https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html",\
                        "firstPublishDate": "2021-01-31T03:51:30Z",\
                        "lastPublishDate": "2021-01-31T03:51:30Z",\
                        "lastModifiedDate": "2021-01-31T03:51:30Z",\
                        "path": "/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer",\
                        "source": "cnn",\
                        "location": None,\
                        "byLine": "Opinion by Julian Zelizer, CNN Political Analyst",\
                        "contributors": ["Julian Zelizer"],\
                        "headline": "McConnell's defense of the filibuster is a farce",\
                        "section": "opinions",\
                        "mappedSection": "OPINION",\
                        "thumbnail": "https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg"},
                        {"_id": "h_415896d4e64fa3246f35d70c4cd30828",\
                        "type": "article",\
                        "body": "Sample Body",\
                        "sourceId": "article_1228FDB2-43E1-413C-0FCC-562D988CEACA",\
                        "url": "https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html",\
                        "firstPublishDate": "2021-01-31T03:51:30Z",\
                        "lastPublishDate": "2021-01-31T03:51:30Z",\
                        "lastModifiedDate": "2021-01-31T03:51:30Z",\
                        "path": "/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer",\
                        "source": "cnn",\
                        "location": None,\
                        "byLine": "Opinion by Julian Zelizer, CNN Political Analyst",\
                        "contributors": ["Julian Zelizer"],\
                        "headline": "McConnell's defense of the filibuster is a farce",\
                        "section": "opinions",\
                        "mappedSection": "OPINION",\
                        "thumbnail": "https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg"}]}

        self.assertEqual(output, sample_output)

    @patch.object(Crawler.CNNCrawler.requests.Session, 'get')
    def test_parse_queue(self, mock_get):

        self.scheduler.queue = {'cnn': [{'_id': 'h_415896d4e64fa3246f35d70c4cd30828', 
                                'type': 'article', 
                                'body': 'Sample Body', 
                                'sourceId': 'article_1228FDB2-43E1-413C-0FCC-562D988CEACA', 
                                'url': 'https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html', 
                                'firstPublishDate': '2021-01-31T03:51:30Z', 
                                'lastPublishDate': '2021-01-31T03:51:30Z', 
                                'lastModifiedDate': '2021-01-31T03:51:30Z', 
                                'path': '/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer', 
                                'source': 'cnn', 
                                'location': None, 
                                'byLine': 'Opinion by Julian Zelizer, CNN Political Analyst', 
                                'contributors': ['Julian Zelizer'], 
                                'headline': "McConnell's defense of the filibuster is a farce", 
                                'section': 'opinions', 
                                'mappedSection': 'OPINION', 
                                'thumbnail': 'https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg'}]}
        self.scheduler.transformers.update({"cnn": CNNTransformer()})

        output = self.scheduler.parse_queue()

        sample_output = {'id': 'h_415896d4e64fa3246f35d70c4cd30828', 
                         'url': 'https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html', 
                         'firstPublishDate': '2021-01-31T03:51:30Z', 
                         'lastPublishDate': '2021-01-31T03:51:30Z', 
                         'contributors': ['Julian Zelizer'], 
                         'headline': "McConnell's defense of the filibuster is a farce", 
                         'section': 'opinions', 
                         'thumbnail': 'https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg', 
                         'body': 'Sample Body'}

        self.assertEqual(output, sample_output)
if __name__ == '__main__':
    unittest.main()