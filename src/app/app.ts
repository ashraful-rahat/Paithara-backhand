import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';

dotenv.config({ debug: false });

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Paithara High School!',
  });
});

export default app;
