"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.authController = exports.loginUser = exports.registerUser = exports.createFirstAdmin = void 0;
const http_status_1 = __importDefault(require("http-status"));
const authService = __importStar(require("../services/auth.service"));
const createFirstAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield authService.createFirstAdmin(req.body);
        res.status(http_status_1.default.CREATED).json({
            status: 'success',
            message: 'Admin created successfully',
            data: { email: admin.email, role: admin.role },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createFirstAdmin = createFirstAdmin;
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authService.registerUser(req.body);
        res.status(http_status_1.default.CREATED).json({
            status: 'success',
            message: 'User registered successfully',
            data: { email: user.email, role: user.role },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { token, role } = yield authService.loginUser(email, password);
        res.status(http_status_1.default.OK).json({
            status: 'success',
            message: 'Login successful',
            token,
            role,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.loginUser = loginUser;
exports.authController = {
    createFirstAdmin: exports.createFirstAdmin,
    registerUser: exports.registerUser,
    loginUser: exports.loginUser,
};
