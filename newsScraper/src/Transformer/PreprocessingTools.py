#!/usr/bin/env python3
import os
from bs4 import BeautifulSoup
import string
import re

def remove_url(text):
	return re.sub(r'http\S+','',text)

def remove_nonalphanumeric(text):
	return re.sub('[^a-zA-Z.?!"\' ]','',text)

def remove_html(text):
	soup = BeautifulSoup(text,'lxml')
	bread = soup.get_text()
	return bread

def clean_lower(text):
	return str(text).lower()

def remove_news(text):
	text = text.replace("CNN","OOV")
	text = text.replace("Atlantic","OOV")
	text = text.replace("Breitbart","OOV")
	text = text.replace("New York Times","OOV")
	text = text.replace("Business Insider","OOV")
	text = text.replace("New York Post","OOV")
	text = text.replace("Talking Points Memo","OOV")
	text = text.replace("Guardian","OOV")
	text = text.replace("NPR","OOV")
	text = text.replace("Washington Post","OOV")
	text = text.replace("Reuters","OOV")
	text = text.replace("Vox","OOV")
	return text
