import express from 'express';
import redis from 'redis';
import Article from '../models/article.model';
const client = redis.createClient({
  port: 6379,
  host: 'redis',
});
export function handleWebScraper(req: express.Request, res: express.Response) {
  const articleList: any = [];

  for (const key in req.body) {
    // checks to see if request body is an array of JSON objects or not
    if (!isNaN(Number(key))) {
      // this is for an array of JSON objects

      if (req.body.hasOwnProperty(key)) articleList.push(Object.assign(new Article(), req.body[key]));
    } else {
      // Just a single JSON object
      articleList.push(Object.assign(new Article(), req.body));
      break;
    }
  }

  client.flushall(function (error, data) {
    if (error) {
      console.log(error);
    }
    console.log('Flushed')
    // insert data into database
    Article.insertMany(articleList)
      .then(() => {
        console.log('Data inserted'); // Success
        res.status(201).send(req.body);
      })
      .catch((error) => {
        console.log('error'); // Failure
        res.status(403).send(error);
      });
  });
}
