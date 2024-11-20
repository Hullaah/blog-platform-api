import type { Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import sum from '@/sum';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send("Express + Typescript Server " + `${sum(100, 200)}`);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
