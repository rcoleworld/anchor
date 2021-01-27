import express from 'express';
import Article from './models/article.model';
import { helloWorld } from './controllers/helloController';

// Article is a Model (a fancy constructor for our ArticleSchema)
// An instance of a model is known as a Document
// testArticle is a Documet
const testArticle = new Article({
  url:"google.com",
  firstPublishDate: new Date(),
  lastPublishDate: new Date(),
  contributers: [ "Jane Doe", "John Doe"],
  headline: "You Wont Beleive These 5 Tips to Shed Weight",
  section:"us",
  thumbnailUrl: "google.com/images",
  body: "Once upon a time there was a prince who...",
  category: "Health",
  publisher: "FOX News"
});

/*
  1. need to create mondoDB database
  2. connect to mongoDB
  3. figure out specifics for saving, creating documents/models, and sending to database
  4. how to integrate data from webscraper
  5. create routes

*/
const PORT: number = Number(process.env.PORT) || 5001;
const HOST: string = process.env.HOST || '0.0.0.0';
const app = express();

app.get('/', helloWorld);

app.listen(PORT, HOST);
console.log(`Listening on ${HOST}:${PORT}`);
