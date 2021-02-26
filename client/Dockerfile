FROM node:latest

RUN mkdir -p /usr/src/app/client

WORKDIR /usr/src/app/client
COPY . .  
ENV PATH /usr/src/app/client/.bin:$PATH

COPY package.json /usr/src/app/client/package.json
RUN npm install --silent
RUN npm install react-scripts --legacy-peer-deps
CMD ["npm", "start"]