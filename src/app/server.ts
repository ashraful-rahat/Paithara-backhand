import dotenv from 'dotenv';
import mongoose from 'mongoose';

import config from './config';
import app from './app';

dotenv.config();

// DB connect function
const connectDB = async () => {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};

// লোকাল ডেভেলপমেন্টের জন্য
if (process.env.NODE_ENV !== 'production') {
    const PORT = config.port || 5000;
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}`);
        });
    });
}

// Vercel এর জন্য শুধু export
module.exports = app;
