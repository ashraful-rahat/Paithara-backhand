"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_1 = __importDefault(require("http-status"));
// The middleware now accepts an array of roles to check
const authenticate = (roles = []) => (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(http_status_1.default.UNAUTHORIZED).json({ status: 'fail', message: 'Unauthorized. Token not found.' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        // Check if a role is required and if the user's role is in the allowed list
        if (roles.length > 0 && !roles.includes(decoded.role)) {
            return res.status(http_status_1.default.FORBIDDEN).json({ status: 'fail', message: 'Forbidden. You do not have the required permissions.' });
        }
        next();
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return res.status(http_status_1.default.UNAUTHORIZED).json({ status: 'fail', message: 'Invalid or expired token.' });
        }
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Internal server error.' });
    }
};
exports.authenticate = authenticate;
