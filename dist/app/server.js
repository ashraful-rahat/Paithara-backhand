"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./db"));
dotenv_1.default.config();
// DB connect
(0, db_1.default)().then(() => {
    console.log('✅ MongoDB connected');
});
// Only listen locally (development)
if (process.env.NODE_ENV !== 'production') {
    const PORT = Number(process.env.PORT) || 5000;
    app_1.default.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
}
// Vercel serverless export
exports.default = app_1.default;
