import express from 'express';
import Article from '../models/article.model';

export function getArticles(req: express.Request, res: express.Response) {
    const options: any = {};
    const where: any = {};
    const sort: any = {};

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
      .exec((error: any, results: any) => {
        if (error) {
          res.status(403).send(error);
          throw error;
        }
        res.status(200).send(results);
      });
  }