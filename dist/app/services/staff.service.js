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
exports.staffService = void 0;
const staff_model_1 = __importDefault(require("../models/staff.model"));
const createStaff = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield staff_model_1.default.create(data);
});
const getAllStaff = () => __awaiter(void 0, void 0, void 0, function* () {
    // .sort() মেথডটি বাদ দেওয়া হয়েছে
    const result = yield staff_model_1.default.find();
    // ডেটাগুলো মেমরিতে সাজানো হচ্ছে
    return result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
});
const getStaffById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield staff_model_1.default.findById(id);
});
const updateStaff = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield staff_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
const deleteStaff = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield staff_model_1.default.findByIdAndDelete(id);
});
exports.staffService = {
    createStaff,
    getAllStaff,
    getStaffById,
    updateStaff,
    deleteStaff,
};
