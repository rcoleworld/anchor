import express from 'express';
import Article from '../models/article.model';


export function handleWebScraper(req:express.Request, res: express.Response) {
    const articleList: typeof Article[] = [];

    for(const key in req.body) {
        // checks to see if request body is an array of JSON objects or not
        if(!isNaN(Number(key))){
            // this is an array of JSON objects
            if(req.body.hasOwnProperty(key)) articleList.push(Object.assign(new Article(), req.body[key]));
        }
        else{
            // Just a single JSON object
            articleList.push(Object.assign(new Article(), req.body));
            break;
        }
      }

    // insert data into database
    Article.insertMany(articleList)
    .then(() => {
        console.log("Data inserted")  // Success
        res.status(201).send(req.body);
    })
    .catch((error) => {
        console.log("error");  // Failure
        res.status(403).send(error);
    });
}