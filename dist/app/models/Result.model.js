"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const mongoose_1 = require("mongoose");
const ResultSchema = new mongoose_1.Schema({
    class: {
        type: Number,
        enum: [6, 7, 8, 9, 10],
        required: true,
    },
    group: {
        type: String,
        enum: ['বিজ্ঞান', 'বাণিজ্য', 'মানবিক'],
        default: null,
    },
    examType: {
        type: String,
        enum: ['অর্ধ-বার্ষিক', 'বার্ষিক'],
        required: true,
    },
    totalStudents: {
        type: Number,
        required: true,
    },
    passed: {
        type: Number,
        required: true,
    },
    failed: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
// একই ক্লাস, গ্রুপ, সাল, পরীক্ষা ধরণের জন্য একাধিক রেজাল্ট যেন না থাকে:
ResultSchema.index({ class: 1, group: 1, year: 1, examType: 1 }, { unique: true });
exports.Result = (0, mongoose_1.model)('Result', ResultSchema);
