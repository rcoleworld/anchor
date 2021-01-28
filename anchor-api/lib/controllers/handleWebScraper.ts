import express from 'express';
import Article from '../models/article.model';


export function handleWebScraper(req:express.Request, res: express.Response) {
    const articleList: typeof Article[] = [];

    for(const key in req.body) {
        if(!isNaN(Number(key))){ // checks to see if post request body is an array of JSON objects or not
            // this is an array of JSON objects
            if(req.body.hasOwnProperty(key)){
                // creates document from Article model and adds to array
                articleList.push(Object.assign(new Article(), req.body[key]));
            }
        }else{
            // this is NOT an array. Just a single JSON object
            articleList.push(Object.assign(new Article(), req.body));
            break;
        }
      }

    // console.log(articleList);

    // insert data into database
    Article.insertMany(articleList)
    .then(() => {
        console.log("Data inserted")  // Success
    })
    .catch((error) => {
        console.log(error)      // Failure
    });

    res.json(req.body);
}