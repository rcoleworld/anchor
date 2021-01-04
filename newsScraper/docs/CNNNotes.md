# CNN Notes

Regular expression for homepage links:

```html
"<a mode=\".{0,10}\" type=\".{0,20}\" name=\".{0,10}\" href=\"/.{0,10}\" data-analytics=\".{0,30}\" title=\".{0,100}\" class=\"sc-fjdhpX sc-chPdSV gxWYAY\">.{0,50}</a>"
```

Indexing homepage links:
```python
import requests
import re

data = requests.get("http://cnn.com", headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}).content.decode()

linkTagReStr = r"<a mode=\".{0,10}\" type=\".{0,20}\" name=\".{0,10}\" href=\"/.{0,10}\" data-analytics=\".{0,30}\" title=\".{0,100}\" class=\"sc-fjdhpX sc-chPdSV gxWYAY\">.{0,50}</a>"
listOfTags = re.findall(linkTagReStr, data)

linkRegexString = r"href=\"/.{0,10}\""
labelTextRegexString = r">.{0,50}</"

homepageLinks = {}
for tag in listOfTags:
    link = re.search(linkRegexString, tag)
    labelText = re.search(labelTextRegexString, tag)
    homepageLinks.update({labelText.group(0)[1:-2]: f"http://www.cnn.com{link.group(0)[6:-1]}"})

for element in homepageLinks:
    print(f"{element} : {homepageLinks.get(element)}")
```