import express from 'express';
import rateLimit from 'express-rate-limit';
import Article from './models/article.model';
import { getArticles } from './controllers/getArticles';
import { getCookies } from './controllers/cookieManagement';
import { getSources } from './controllers/getSources';
import {handleWebScraper } from './controllers/handleWebScraper';
import cookieParser from 'cookie-parser';

import {getAverageStats} from './controllers/getStats';

import { searchArticles } from './controllers/searchArticles';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 5001;
const HOST: string = process.env.HOST || '0.0.0.0';

const MONGODB_URI = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const app = express();
app.use(express.json());

// parse cookies
app.use(cookieParser())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://home.flores.sh:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', "true");

  next();
});

const getArticleLimiter = rateLimit({
    windowMs: 60 * 500, // 30 second window
    max: 5, // start blocking after 5 requests
    message:
      "Too many accounts created from this IP, please try again after an hour"
  });
app.post('/articles', handleWebScraper);
app.get('/articles', getArticles);
app.get(['/articles/search/:searchString', '/articles/search'], searchArticles);
app.get('/stats/:field', getAverageStats);

// add cookies
app.get('/cookieDemo', getCookies);

app.get('/sources', getSources);

app.listen(PORT, HOST);
console.log(`Listening on ${HOST}:${PORT}`);
