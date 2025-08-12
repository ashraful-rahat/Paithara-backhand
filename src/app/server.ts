import dotenv from 'dotenv';
import mongoose from 'mongoose';

import config from './config';
import app from './app';

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in your .env file');
}
const jwtSecret: string = process.env.JWT_SECRET;

// Get the PORT and DB_URL from config (loaded from .env)
const PORT = config.port || 5000;
const DB_URL = config.database_url as string;

async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log('✅ Connected to MongoDB');

    // শুধু লোকাল ডেভেলপমেন্টে app.listen চালাবেন
    if (process.env.VERCEL !== '1') {
      app.listen(PORT, () => {
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
      });
    }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
}

main();

// Vercel এর জন্য app export করুন
export default app;
