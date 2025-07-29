import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import { staffRoutes } from './routes/staff.route';

dotenv.config({ debug: false });

const app: Application = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/staff', staffRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Paithara High School!',
  });
});

export default app;
