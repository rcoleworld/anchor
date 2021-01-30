import express from 'express';
import Article from '../models/article.model';
import AIOutput from '../models/AIOutput';

function bodyParser(body: string){
    const bodyList: AIOutput[]= [];

    const split = body.split(". "); //change deliminator

    split.forEach(s => {
        bodyList.push({
            sentence: s,
            biasDetectionResult: null,
            objectivityDetectionResult: null,
            sentimentDetectionResult: null
        });
    });

    return bodyList;
}

export function handleWebScraper(req:express.Request, res: express.Response) {
    const articleList: typeof Article[] = [];

    for(const key in req.body) {
        // checks to see if request body is an array of JSON objects or not
        if(!isNaN(Number(key))){
            // this is for an array of JSON objects
            
            // access and break down body;
            req.body[key].body = bodyParser(req.body[key].body);

            if(req.body.hasOwnProperty(key)) articleList.push(Object.assign(new Article(), req.body[key]));
        }
        else{
            // Just a single JSON object
            req.body.body = bodyParser(req.body.body);
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