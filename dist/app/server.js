"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
// Get the DB_URL from config (loaded from .env)
const DB_URL = config_1.default.database_url;
// ডেটাবেজ কানেকশন ফাংশন
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(DB_URL);
        console.log('✅ Connected to MongoDB');
    }
    catch (error) {
        console.error('❌ MongoDB connection error:', error);
        // কানেকশন ফেল করলে অ্যাপ বন্ধ করে দেবে
        process.exit(1);
    }
});
// লোকাল বা প্রোডাকশন পরিবেশের জন্য সার্ভার চালু
// এটি লোকাল ডেভেলপমেন্টের জন্য, Vercel এর জন্য নয়।
if (process.env.NODE_ENV !== 'production') {
    const PORT = config_1.default.port || 5000;
    connectDB().then(() => {
        app_1.default.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}`);
        });
    });
}
// Vercel-এর জন্য এক্সপ্রেস অ্যাপ এক্সপোর্ট
// এটি Vercel এর প্রধান এন্ট্রি পয়েন্ট
exports.default = app_1.default;
