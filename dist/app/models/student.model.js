"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const StudentSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    roll: { type: Number, required: true },
    class: {
        type: String,
        enum: ['৬ষ্ঠ', '৭ম', '৮ম', '৯ম', '১০ম'],
        required: true,
    },
    group: {
        type: String,
        enum: ['বিজ্ঞান', 'মানবিক', 'ব্যবসায়', 'সাধারণ'],
        required: function () {
            return ['৯ম', '১০ম'].includes(this.class);
        },
    },
    gender: { type: String, enum: ['ছাত্র', 'ছাত্রী'], required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    guardianNumber: { type: String, required: true },
    address: { type: String },
    photo: { type: String },
    dateOfBirth: { type: Date },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });
const StudentModel = mongoose_1.default.model('Student', StudentSchema);
exports.default = StudentModel;
