FROM node:latest
RUN npm install -g nodemon 
RUN mkdir -p /usr/src/app/anchor-api

WORKDIR /usr/src/app/anchor-api

COPY package.json /usr/src/app/anchor-api

RUN npm install tsc --silent
RUN npm install


COPY . .
EXPOSE 5001
CMD [ "npm", "run", "dev"]