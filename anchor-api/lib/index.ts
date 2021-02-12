import express from 'express';
import Article from './models/article.model';
import { getArticles, handleWebScraper, searchArticles } from './controllers/handleWebScraper';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 5001;
const HOST: string = process.env.HOST || '0.0.0.0';

const MONGODB_URI = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const app = express();
app.use(express.json());
app.use(cors());

app.post('/articles', handleWebScraper);
app.get('/articles', getArticles);
app.get('/articles/search/:searchString', searchArticles);

app.listen(PORT, HOST);
console.log(`Listening on ${HOST}:${PORT}`);
