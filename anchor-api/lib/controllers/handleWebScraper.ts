import express from 'express';
import Article from '../models/article.model';
import AIOutput from '../models/AIOutput';

function bodyParser(body: string) {
  const bodyList: AIOutput[] = [];

  const split = body.split('. '); // change deliminator

  split.forEach((s) => {
    bodyList.push({
      sentence: s,
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    });
  });

  return bodyList;
}

export function handleWebScraper(req: express.Request, res: express.Response) {
  const articleList: typeof Article[] = [];

  for (const key in req.body) {
    // checks to see if request body is an array of JSON objects or not
    if (!isNaN(Number(key))) {
      // this is for an array of JSON objects

      // access and break down body;
      req.body[key].body = bodyParser(req.body[key].body);

      if (req.body.hasOwnProperty(key)) articleList.push(Object.assign(new Article(), req.body[key]));
    } else {
      // Just a single JSON object
      req.body.body = bodyParser(req.body.body);
      articleList.push(Object.assign(new Article(), req.body));
      break;
    }
  }

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
}

export function getArticles(req: express.Request, res: express.Response) {
  const options: any = {};
  let where: any = {};
  let sort: any = {};

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

  Article.find(where, {}, options)
    .sort(sort)
    .exec((error, results) => {
      if (error) {
        res.status(403).send(error);
        throw error;
      }
      res.status(201).send(results);
    });
}