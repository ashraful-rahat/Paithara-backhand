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
Object.defineProperty(exports, "__esModule", { value: true });
exports.noticeController = void 0;
const notice_service_1 = require("../services/notice.service");
exports.noticeController = {
    createNotice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notice = yield notice_service_1.noticeService.createNotice(req.body);
                res.status(201).json({
                    success: true,
                    message: 'Notice created successfully',
                    data: notice,
                });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Server error', error });
            }
        });
    },
    getAllNotices(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notices = yield notice_service_1.noticeService.getAllNotices();
                res.json({ success: true, data: notices });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Server error', error });
            }
        });
    },
    getNoticeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notice = yield notice_service_1.noticeService.getNoticeById(req.params.id);
                if (!notice) {
                    return res.status(404).json({ success: false, message: 'Notice not found' });
                }
                res.json({ success: true, data: notice });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Server error', error });
            }
        });
    },
    updateNotice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedNotice = yield notice_service_1.noticeService.updateNotice(req.params.id, req.body);
                if (!updatedNotice) {
                    return res.status(404).json({ success: false, message: 'Notice not found' });
                }
                res.json({ success: true, message: 'Notice updated successfully', data: updatedNotice });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Server error', error });
            }
        });
    },
    deleteNotice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedNotice = yield notice_service_1.noticeService.deleteNotice(req.params.id);
                if (!deletedNotice) {
                    return res.status(404).json({ success: false, message: 'Notice not found' });
                }
                res.json({ success: true, message: 'Notice deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Server error', error });
            }
        });
    },
};
