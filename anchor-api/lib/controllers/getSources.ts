import express from 'express';
import Article from '../models/article.model';

export function getSources(req: express.Request, res: express.Response) {
  Article.find().distinct('publisher', (error: any, results: any) => {
    if (error) {
      res.status(403).send(error);
      throw error;
    }
    res.status(200).send(results);
  });
}
