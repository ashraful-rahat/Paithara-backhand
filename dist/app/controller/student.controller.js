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
exports.studentController = void 0;
const student_service_1 = require("../services/student.service");
const http_status_1 = __importDefault(require("http-status"));
const createStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Check and log the received body and file from the frontend
        console.log('Received Body:', req.body);
        console.log('Received File:', req.file);
        // Ensure req.file exists before trying to access its path
        const fileUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        if (!fileUrl) {
            console.error('Error: Photo upload failed or missing.');
            throw new Error('Photo upload failed or missing');
        }
        // Log the file URL to confirm it was uploaded successfully
        console.log('File uploaded successfully to:', fileUrl);
        // The data object to be passed to the service
        const data = Object.assign(Object.assign({}, req.body), { photo: fileUrl });
        // Log the final data object before sending it to the database
        console.log('Final data to be saved:', data);
        const result = yield student_service_1.studentService.createStudent(data);
        // Log the result from the service before sending the final response
        console.log('Database save result:', result);
        res.status(http_status_1.default.CREATED).json({
            status: 'success',
            message: 'Student created successfully',
            data: result,
        });
    }
    catch (error) {
        // Log the specific error that caused the 500 status
        console.error('Caught an error in createStudent controller:', error.message);
        next(error);
    }
});
const getAllStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.studentService.getStudents();
        res.status(http_status_1.default.OK).json({
            status: 'success',
            results: result.length,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.studentService.getStudentById(req.params.id);
        if (!result) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                status: 'fail',
                message: 'Student not found',
            });
        }
        res.status(http_status_1.default.OK).json({
            status: 'success',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = req.params.id;
        const fileUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        const data = Object.assign(Object.assign({}, req.body), (fileUrl && { photo: fileUrl }));
        const result = yield student_service_1.studentService.updateStudent(id, data);
        if (!result) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                status: 'fail',
                message: 'Student not found',
            });
        }
        res.status(http_status_1.default.OK).json({
            status: 'success',
            message: 'Student updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_service_1.studentService.getStudentById(req.params.id);
        if (!student) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                status: 'fail',
                message: 'Student not found',
            });
        }
        yield student_service_1.studentService.deleteStudent(req.params.id);
        res.status(http_status_1.default.OK).json({
            status: 'success',
            message: 'Student deleted successfully',
        });
    }
    catch (error) {
        next(error);
    }
});
exports.studentController = {
    createStudent,
    getAllStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent,
};
