import express from 'express';
import Article from '../models/article.model';

export function getAverageStats(request: express.Request, response: express.Response) {
  const field = request.params.field;

  Article.aggregate([{ $group: { _id: null, average: { $avg: `$${field}` } } }], function (error: any, results: any) {
    if (error) {
      response.status(403).send(error);
      throw error;
    }
    response.status(200).send(results);
  });
}
