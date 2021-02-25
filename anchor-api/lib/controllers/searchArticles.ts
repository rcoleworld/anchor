import express from 'express';
import Article from '../models/article.model';

export function searchArticles(req: express.Request, res: express.Response) {
  const searchString = req.params.searchString;
  console.log(req.params);
  if (!searchString || searchString === undefined) {
    res.status(400).send({error: 'Search string is empty or undefined. Must have search string'});
    throw new Error('Must have search string');
  }
  const options: any = {};
  if (req.query.limit !== undefined) {
    options.limit = Number(req.query.limit);
  }

  if (req.query.offset !== undefined) {
    options.skip = Number(req.query.offset);
  }

  Article.find({$text:  {$search: searchString}}, {}, options).exec((error: any, results: any) => {
    if (error) {
      res.status(403).send(error);
      throw error;
    }
    res.status(200).send(results);
  })
}