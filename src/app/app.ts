import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import { staffRoutes } from './routes/staff.route';
import { studentRoutes } from './routes/student.routes';
import { authRoutes } from './routes/auth.routes';
import { noticeRoutes } from './routes/notice.route';

dotenv.config({ debug: false });

const app: Application = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/staff', staffRoutes);
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/notices', noticeRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Paithara High School!',
  });
});

export default app;
