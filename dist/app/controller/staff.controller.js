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
exports.staffController = void 0;
const staff_service_1 = require("../services/staff.service");
const http_status_1 = __importDefault(require("http-status"));
const createStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const fileUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path; // multer-storage-cloudinary puts the Cloudinary URL in req.file.path
        if (!fileUrl) {
            throw new Error('Photo upload failed or missing');
        }
        const data = typeof req.body.subjectPreferences === 'string'
            ? Object.assign(Object.assign({}, req.body), { subjectPreferences: JSON.parse(req.body.subjectPreferences), photo: fileUrl }) : Object.assign(Object.assign({}, req.body), { photo: fileUrl });
        const result = yield staff_service_1.staffService.createStaff(data);
        res.status(http_status_1.default.CREATED).json({
            status: 'success',
            message: 'Staff created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield staff_service_1.staffService.getAllStaff();
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
const getSingleStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield staff_service_1.staffService.getStaffById(req.params.id);
        if (!result) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                status: 'fail',
                message: 'Staff not found',
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
const updateStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = typeof req.body.subjectPreferences === 'string'
            ? Object.assign(Object.assign({}, req.body), { subjectPreferences: JSON.parse(req.body.subjectPreferences) }) : req.body;
        const result = yield staff_service_1.staffService.updateStaff(id, data);
        if (!result) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                status: 'fail',
                message: 'Staff not found',
            });
        }
        res.status(http_status_1.default.OK).json({
            status: 'success',
            message: 'Staff updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield staff_service_1.staffService.getStaffById(req.params.id);
        if (!staff) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                status: 'fail',
                message: 'Staff not found',
            });
        }
        yield staff_service_1.staffService.deleteStaff(req.params.id);
        res.status(http_status_1.default.OK).json({
            status: 'success',
            message: 'Staff deleted successfully',
        });
    }
    catch (error) {
        next(error);
    }
});
exports.staffController = {
    createStaff,
    getAllStaff,
    getSingleStaff,
    updateStaff,
    deleteStaff,
};
