# Collection of scrapers for popular news websites
## Currently Supported:
- N/A
## In Development:
- CNN


## Scraper Requirements:
- Be able to crawl news websites and obtain article data
- Included data requirements
    - UUID for db
    - Timestamp of Upload
    - Timestamp of Update (None if not available)
    - Timestamp of initial crawl
    - Author
    - Category
    - Website of origin
    - Link to article
    - Article Content
    - Links to media for content
- Output to a database for storage of information

## Architecture:
- Four primary components:
    - Scheduler - Determines a queue of pages to be read in
    - Transformer - Modifies raw html data into the desired JSON output format
    - Putter - Stores output data into its appropriate location
    - Crawler - Obtains raw html data from the requested webpage

## Config format:
```json
{
    "websites": [
        {
            "website_name": "website name", 
            "website_url": "url"
        },
        {
            "website_name": "website name", 
            "website_url": "url"
        }
    ]
}
```

## Component Class Definition and Methods:
- Scheduler(Scheduler.py) - Scheduler()
    - Instance Variables:
        - configs: dict
        - queue: dict
    - Methods:
        - load_configs() - takes in configuration file and sets the config variable to be usable for the scheduler
        - create_queue() - creates queue for website given by the key referenced in the configs
        - update_queue( key: str ) - generates website specific queue and updates the queue for the website
- Transformer(Transformer.py) - Transformer()
    - Note: parent class with method signatures for the child classes
    - Instance Variables:
        - input_data: str
        - transformed_data: dict
    - Methods:
        - get_article_text() - parses input_data for article text and updated the data for the key "article_text" in transformed_data
        - get_metadata() - parses input_data for desired metadata such as upload date or author name
- Putter(Putter.py) - Putter()
    - Instance Variables:
        - .
    - Methods:
        - .
- Crawler(Crawler.py) - Crawler( url_name: str )
    - Instance Variables:
        - website_url: str
        - webpage_data: str
        - already_crawled: bool
    - Methods:
        - get_page() - makes a request to the url within the class instance and returns the output
        - get_images() - returns a list of urls for all images on a page
            - If webpage is already pulled then doesn't make another request, otherwise make request
        - get_links() - returns a list of links on a page
            - If webpage is already pulled then doesn't make another request, otherwise make request