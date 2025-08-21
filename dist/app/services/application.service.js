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
exports.applicationService = void 0;
const application_model_1 = __importDefault(require("../models/application.model"));
const createApplication = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield application_model_1.default.create(data);
});
const getAllApplications = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield application_model_1.default.find().sort({ createdAt: -1 }); // নতুন আবেদনগুলো প্রথমে দেখাবে
    return result;
});
const getApplicationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield application_model_1.default.findById(id);
});
const updateApplication = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield application_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
const deleteApplication = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield application_model_1.default.findByIdAndDelete(id);
});
exports.applicationService = {
    createApplication,
    getAllApplications,
    getApplicationById,
    updateApplication,
    deleteApplication,
};
