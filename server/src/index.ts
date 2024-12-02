import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import sum from '@/sum';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();
  res.on('finish', () => {
    const endTime = Date.now();
    console.log(` ${req.method} ${req.url} ${res.statusCode} in ${endTime - startTime}ms testsing`);
  });
  next();
})

app.get('/', (req: Request, res: Response) => {
  res.send("Express + Typescript Server " + `${sum(100, 200)}`);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
