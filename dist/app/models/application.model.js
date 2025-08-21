"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const applicationSchema = new mongoose_1.Schema({
    studentNameBn: { type: String, required: true },
    studentNameEn: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    birthCertificateNo: { type: String, required: true, unique: true },
    religion: { type: String, required: true },
    bloodGroup: { type: String },
    photo: { type: String, required: true },
    applyingForClass: { type: String, required: true },
    previousSchoolName: { type: String, required: true },
    lastExamResult: { type: String, required: true },
    fatherNameBn: { type: String, required: true },
    fatherNameEn: { type: String, required: true },
    fatherOccupation: { type: String },
    fatherNid: { type: String, required: true, unique: true },
    motherNameBn: { type: String, required: true },
    motherNameEn: { type: String, required: true },
    motherOccupation: { type: String },
    motherNid: { type: String, required: true, unique: true },
    guardianContact: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    userId: { type: String, required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});
const ApplicationModel = (0, mongoose_1.model)('Application', applicationSchema);
exports.default = ApplicationModel;
