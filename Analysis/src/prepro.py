#!/usr/bin/env python3
import pandas as pd
import uuid
pos = pd.read_csv("datasets/NewB/liberal.txt",sep="\t",header=None)
neg = pd.read_csv("datasets/NewB/conservative.txt",sep="\t",header=None)

def make_newF(text,dir):
	path = "./" + dir+ "/"+str(uuid.uuid4())+".txt"
	d = open(path,"w")
	d.write(text)
	d.close()

for index,x in pos.iterrows():
	make_newF(x[1],'pos')

for index,x in neg.iterrows():
	make_newF(x[1],'neg')
