"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = void 0;
const mongoose_1 = require("mongoose");
const noticeSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    link: { type: String, default: '#' },
}, {
    timestamps: true,
});
exports.Notice = (0, mongoose_1.model)('Notice', noticeSchema);
