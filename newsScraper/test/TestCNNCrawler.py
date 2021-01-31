import unittest
from unittest.mock import Mock, patch
import sys
sys.path.append("../src")
import Crawler.CNNCrawler
from Crawler.CNNCrawler import CNNCrawler

class TestCNNCrawler(unittest.TestCase):
    @patch.object(Crawler.CNNCrawler.requests.Session, 'get')
    def test_get_articles(self, mock_get):
        """
        Testing get_articles function
        """
        
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
        c = CNNCrawler(num_of_articles=50)

        self.assertEqual(c.articles_list, [{'_id': 'h_415896d4e64fa3246f35d70c4cd30828', \
                                    'type': 'article', \
                                    'body': 'Sample Body', \
                                    'sourceId': 'article_1228FDB2-43E1-413C-0FCC-562D988CEACA', \
                                    'url': 'https://www.cnn.com/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer/index.html', \
                                    'firstPublishDate': '2021-01-31T03:51:30Z', \
                                    'lastPublishDate': '2021-01-31T03:51:30Z', \
                                    'lastModifiedDate': '2021-01-31T03:51:30Z', \
                                    'path': '/2021/01/30/opinions/mitch-mcconnell-senate-filibuster-zelizer', \
                                    'source': 'cnn', \
                                    'location': None, \
                                    'byLine': 'Opinion by Julian Zelizer, CNN Political Analyst', \
                                    'contributors': ['Julian Zelizer'], \
                                    'headline': "McConnell's defense of the filibuster is a farce", \
                                    'section': 'opinions', \
                                    'mappedSection': 'OPINION', \
                                    'thumbnail': 'https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg'}], "Should match sample output as a dict")

if __name__ == '__main__':
    unittest.main()