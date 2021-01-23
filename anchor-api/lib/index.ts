import express from 'express';

const PORT: number = Number(process.env.PORT) || 5001;
const HOST: string = process.env.HOST || '0.0.0.0';
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('<h1>Hello</h1>');
})

app.listen(PORT, HOST);
console.log(`Listening on ${HOST}:${PORT}`);