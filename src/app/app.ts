import cors from 'cors';
import express, { Application } from 'express';
import { applicationRoutes } from './routes/application.routes';
import { authRoutes } from './routes/auth.routes';
import { noticeRoutes } from './routes/notice.route';
import { resultRoutes } from './routes/result.routes';
import { staffRoutes } from './routes/staff.route';
import { studentRoutes } from './routes/student.routes';

const app: Application = express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://paithara-frontend.vercel.app'],
    credentials: true,
  }),
);
app.use(express.json());

// Routes
app.use('/api/v1/staff', staffRoutes);
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/notices', noticeRoutes);
app.use('/api/v1/results', resultRoutes);
app.use('/api/v1/applications', applicationRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Paithara High School!',
  });
});

export default app;