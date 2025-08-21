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
exports.studentService = void 0;
const student_model_1 = __importDefault(require("../models/student.model"));
const createStudent = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.create(data);
});
const getStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.find();
});
const getStudentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.findById(id);
});
const updateStudent = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
const deleteStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.findByIdAndDelete(id);
});
exports.studentService = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
