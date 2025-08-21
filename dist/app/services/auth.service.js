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
exports.createFirstAdmin = exports.loginUser = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_model_1 = __importDefault(require("../models/auth.model"));
const registerUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield auth_model_1.default.findOne({ email: data.email });
    if (existingUser) {
        throw new Error('User with this email already exists');
    }
    const user = yield auth_model_1.default.create(data);
    return user;
});
exports.registerUser = registerUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield auth_model_1.default.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = yield user.comparePassword(password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    const signOptions = {
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    };
    const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, signOptions);
    // এখানে token এবং role উভয়ই রিটার্ন করা হচ্ছে
    return { token, role: user.role };
});
exports.loginUser = loginUser;
const createFirstAdmin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const existingAdminsCount = yield auth_model_1.default.countDocuments({ role: 'admin' });
    if (existingAdminsCount > 0) {
        throw new Error('Admin user already exists. Cannot create a new one.');
    }
    const admin = yield auth_model_1.default.create(Object.assign(Object.assign({}, data), { role: 'admin' }));
    return admin;
});
exports.createFirstAdmin = createFirstAdmin;
