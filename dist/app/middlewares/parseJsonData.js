"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJsonData = void 0;
const parseJsonData = (req, res, next) => {
    if (req.body.data) {
        try {
            const parsed = JSON.parse(req.body.data);
            req.body = Object.assign(Object.assign({}, parsed), req.body);
            delete req.body.data;
        }
        catch (_a) {
            // send and *return* to prevent falling through
            res.status(400).json({ status: 'fail', message: 'Invalid JSON data' });
            return;
        }
    }
    next();
};
exports.parseJsonData = parseJsonData;
