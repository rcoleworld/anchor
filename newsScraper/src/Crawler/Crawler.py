import requests
import re

data = requests.get("http://cnn.com", headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}).content.decode()

reStr = r"<a mode=\".{0,10}\" type=\".{0,20}\" name=\".{0,10}\" href=\"/.{0,10}\" data-analytics=\".{0,30}\" title=\".{0,100}\" class=\"sc-fjdhpX sc-chPdSV gxWYAY\">.{0,50}</a>"

list = re.findall(reStr, data)

for element in list:
    print(element)