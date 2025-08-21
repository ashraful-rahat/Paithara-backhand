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
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const application_routes_1 = require("./routes/application.routes");
const auth_routes_1 = require("./routes/auth.routes");
const notice_route_1 = require("./routes/notice.route");
const result_routes_1 = require("./routes/result.routes");
const staff_route_1 = require("./routes/staff.route");
const student_routes_1 = require("./routes/student.routes");
dotenv_1.default.config({ debug: false });
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'https://paithara-frontend.vercel.app'],
    credentials: true,
}));
app.use(express_1.default.json());
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) {
            console.error('DATABASE_URL is not defined in environment variables.');
            return;
        }
        yield mongoose_1.default.connect(dbUrl, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 10000,
        });
        console.log('Database connected successfully!');
    }
    catch (error) {
        console.error('Database connection error:', error);
    }
});
connectDB();
// Routes
app.use('/api/v1/staff', staff_route_1.staffRoutes);
app.use('/api/v1/students', student_routes_1.studentRoutes);
app.use('/api/v1/auth', auth_routes_1.authRoutes);
app.use('/api/v1/notices', notice_route_1.noticeRoutes);
app.use('/api/v1/results', result_routes_1.resultRoutes);
app.use('/api/v1/applications', application_routes_1.applicationRoutes);
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to Paithara High School!',
    });
});
exports.default = app;
