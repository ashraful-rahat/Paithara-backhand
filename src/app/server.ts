import dotenv from 'dotenv';
import mongoose from 'mongoose';

import config from './config';
import app from './app';

dotenv.config();

// Get the DB_URL from config (loaded from .env)
const DB_URL = config.database_url as string;

// ডেটাবেজ কানেকশন ফাংশন
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        // কানেকশন ফেল করলে অ্যাপ বন্ধ করে দেবে
        process.exit(1);
    }
};

// লোকাল বা প্রোডাকশন পরিবেশের জন্য সার্ভার চালু
// এটি লোকাল ডেভেলপমেন্টের জন্য, Vercel এর জন্য নয়।
if (process.env.NODE_ENV !== 'production') {
    const PORT = config.port || 5000;
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}`);
        });
    });
}

// Vercel-এর জন্য এক্সপ্রেস অ্যাপ এক্সপোর্ট
// এটি Vercel এর প্রধান এন্ট্রি পয়েন্ট
export default app;
