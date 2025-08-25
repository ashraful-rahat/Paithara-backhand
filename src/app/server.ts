import dotenv from 'dotenv';
import app from './app';
import connectDB from './db';


dotenv.config();

// DB connect
connectDB().then(() => {
  console.log('✅ MongoDB connected');
});

// Only listen locally (development)
if (process.env.NODE_ENV !== 'production') {
  const PORT = Number(process.env.PORT) || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

// Vercel serverless export
export default app;
