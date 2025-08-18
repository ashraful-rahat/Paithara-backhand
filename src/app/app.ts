import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import { staffRoutes } from './routes/staff.route';
import { studentRoutes } from './routes/student.routes';
import { authRoutes } from './routes/auth.routes';
import { noticeRoutes } from './routes/notice.route';
import { resultRoutes } from './routes/result.routes';

dotenv.config({ debug: false });

const app: Application = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://paithara-frontend.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

// নতুন ডেটাবেজ কানেকশন লজিক
const connectDB = async () => {
  try {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      console.error("DATABASE_URL is not defined in environment variables.");
      return;
    }

    // কানেকশন অপশনস যোগ করা হয়েছে, যা Vercel-এ সমস্যা সমাধানে সাহায্য করতে পারে
    await mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 5000, // 5 সেকেন্ডে টাইমআউট
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

connectDB();

// Routes
app.use('/api/v1/staff', staffRoutes);
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/notices', noticeRoutes);
app.use('/api/v1/results', resultRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Paithara High School!',
  });
});

export default app;