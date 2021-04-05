import express from 'express';
import redis from 'redis';
import Article from '../models/article.model';

const client = redis.createClient({
  port: 6379,
  host: 'redis',
});
export function getArticles(req: express.Request, res: express.Response) {
  const options: any = {};
  const where: any = {};
  const sort: any = {};
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log(fullUrl);
  // checks for query params
  if (req.query.limit !== undefined) {
    options.limit = Number(req.query.limit);
  }

  if (req.query.offset !== undefined) {
    options.skip = Number(req.query.offset);
  }

  if (req.query.category !== undefined) {
    where.category = String(req.query.category);
  }

  if (req.query.orderBy !== undefined) {
    if (req.query.orderType === 'asc') {
      sort[String(req.query.orderBy)] = 1;
    } else {
      sort[String(req.query.orderBy)] = -1;
    }
  }
  client.get(fullUrl, function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log('Made it to memcached get');
    if (data !== null) {
      console.log('Got data from memcached: ' + data);
      res.status(200).send(JSON.parse(data));
    } else {
      Article.find(where, {}, options)
        .sort(sort)
        .exec((error: any, results: any) => {
          if (error) {
            res.status(403).send(error);
            throw error;
          }
          console.log('Inside of Article find.');
          client.set(fullUrl, JSON.stringify(results), function (err) {
            console.log('Made it to memcached set');
            if (err) {
              console.log(err);
            }
          });
          client.expire(fullUrl, 10); // expires key after x seconds
          res.status(200).send(results);
        });
    }
  });
}
