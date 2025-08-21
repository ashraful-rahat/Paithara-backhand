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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const application_service_1 = require("../services/application.service");
const createApplication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const fileUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path; // multer-storage-cloudinary থেকে ছবির URL
        if (!fileUrl) {
            throw new Error('Photo upload failed or missing');
        }
        const _b = req.body, { userId } = _b, restOfData = __rest(_b, ["userId"]);
        // ফ্রন্টএন্ড থেকে আসা ডেটা
        const data = Object.assign(Object.assign({}, restOfData), { photo: fileUrl, userId: userId });
        const result = yield application_service_1.applicationService.createApplication(data);
        res.status(http_status_1.default.CREATED).json({
            status: 'success',
            message: 'Application created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllApplications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield application_service_1.applicationService.getAllApplications();
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
const getSingleApplication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield application_service_1.applicationService.getApplicationById(req.params.id);
        if (!result) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                status: 'fail',
                message: 'Application not found',
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
const updateApplication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = req.params.id;
        const fileUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        const updateData = Object.assign(Object.assign({}, req.body), (fileUrl && { photo: fileUrl }));
        const result = yield application_service_1.applicationService.updateApplication(id, updateData);
        if (!result) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                status: 'fail',
                message: 'Application not found',
            });
        }
        res.status(http_status_1.default.OK).json({
            status: 'success',
            message: 'Application updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteApplication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const application = yield application_service_1.applicationService.getApplicationById(req.params.id);
        if (!application) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                status: 'fail',
                message: 'Application not found',
            });
        }
        yield application_service_1.applicationService.deleteApplication(req.params.id);
        res.status(http_status_1.default.OK).json({
            status: 'success',
            message: 'Application deleted successfully',
        });
    }
    catch (error) {
        next(error);
    }
});
exports.applicationController = {
    createApplication,
    getAllApplications,
    getSingleApplication,
    updateApplication,
    deleteApplication,
};
