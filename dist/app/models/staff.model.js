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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const classSubjectSchema = new mongoose_1.Schema({
    class: {
        type: String,
        enum: ['৬ষ্ঠ', '৭ম', '৮ম', '৯ম', '১০ম'],
        required: true,
    },
    subjects: {
        type: [String],
        enum: [
            // ৬-৮ম শ্রেণির বিষয়
            'বাংলা',
            'ইংরেজি',
            'গণিত',
            'সাধারণ বিজ্ঞান',
            'বাংলাদেশ ও বিশ্বপরিচয়',
            'হিন্দুধর্ম শিক্ষা',
            'ইসলাম ধর্ম শিক্ষা',
            'বিজ্ঞান',
            'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)',
            // ৯-১০ম শ্রেণির বিজ্ঞান গ্রুপ
            'পদার্থবিজ্ঞান',
            'রসায়ন',
            'জীববিজ্ঞান',
            // ৯-১০ম শ্রেণির ব্যবসায়/কমার্স গ্রুপ
            'হিসাববিজ্ঞান',
            'ব্যবসায় উদ্যোগ',
            'অর্থনীতি',
            'ব্যবসায় সংগঠন ও ব্যবস্থাপনা',
            'বাণিজ্য আইন ও গণিত',
            'ব্যাংকিং ও বিমা',
            // ৯-১০ম শ্রেণির মানবিক গ্রুপ
            'ইতিহাস',
            'ভূগোল',
            'সমাজবিজ্ঞান',
            'নাগরিকতা শিক্ষা',
            'মনোবিজ্ঞান',
            'গার্হস্থ্য বিজ্ঞান',
            // ধর্মীয় বিষয়
            'ইসলাম ধর্ম',
            'হিন্দু ধর্ম',
            'বৌদ্ধ ধর্ম',
            'খ্রিস্টান ধর্ম',
            // অতিরিক্ত
            'শারীরিক শিক্ষা ও স্বাস্থ্য',
            'শিল্প ও কারুশিল্প',
            'সাংস্কৃতিক শিক্ষা',
        ],
        required: true,
    },
}, { _id: false });
const StaffSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    category: {
        type: String,
        enum: [
            'সহকারী শিক্ষক',
            'প্রধান শিক্ষক',
            'বিষয় ভিত্তিক শিক্ষক',
            'ক্লার্ক',
            'দপ্তরী',
            'অতিথি শিক্ষক',
            'লাইব্রেরিয়ান',
            'গার্ড',
            'অ্যাকাউন্টেন্ট',
            'প্রশাসক',
        ],
        required: true,
    },
    subjectPreferences: {
        type: [classSubjectSchema],
        required: false, // optional, কারণ সব স্টাফদের প্রয়োজন না
    },
    qualification: { type: String },
    experience: { type: Number },
    address: { type: String },
    photo: { type: String, required: true },
    dateOfJoining: { type: Date },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });
const StaffModel = mongoose_1.default.model('Staff', StaffSchema);
exports.default = StaffModel;
