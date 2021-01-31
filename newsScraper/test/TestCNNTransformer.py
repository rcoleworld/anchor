import unittest
import sys
sys.path.append("../src")
from Transformer.CNNTransformer import CNNTransformer

class TestCNNTransformer(unittest.TestCase):
    def test_transform(self):
        t = CNNTransformer()

        raw_input = {
            '_id': 'h_415896d4e64fa3246f35d70c4cd30828',
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
            'thumbnail': 'https://cdn.cnn.com/cnnnext/dam/assets/140320115936-julian-zelizer-profile-story-body.jpg'
            }

        test_data = t.transform(raw_input)

        correct_output = {"id": raw_input['_id'], 
                    "url": raw_input['url'], 
                    "firstPublishDate": raw_input['firstPublishDate'],
                    "lastPublishDate": raw_input['lastPublishDate'],
                    "contributors": raw_input['contributors'],
                    "headline": raw_input['headline'],
                    "section": raw_input['section'],
                    "thumbnail": raw_input['thumbnail'],
                    "body": raw_input['body']
                    }

        self.assertEqual(test_data, correct_output, f"Should output:\n {correct_output}")

if __name__ == '__main__':
    unittest.main()