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
exports.resultController = void 0;
const result_service_1 = require("../services/result.service");
exports.resultController = {
    createResult(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield result_service_1.resultService.createResult(req.body);
                res.status(201).json({
                    success: true,
                    message: 'রেজাল্ট সফলভাবে যুক্ত হয়েছে',
                    data: result,
                });
            }
            catch (error) {
                if (error.code === 11000) {
                    return res.status(409).json({
                        success: false,
                        message: 'এই রেজাল্টটি ইতোমধ্যে বিদ্যমান',
                    });
                }
                res.status(500).json({ success: false, message: 'সার্ভার ত্রুটি', error });
            }
        });
    },
    getAllResults(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield result_service_1.resultService.getAllResults();
                res.json({ success: true, data: results });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'সার্ভার ত্রুটি', error });
            }
        });
    },
    getResultById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield result_service_1.resultService.getResultById(req.params.id);
                if (!result) {
                    return res.status(404).json({ success: false, message: 'রেজাল্ট পাওয়া যায়নি' });
                }
                res.json({ success: true, data: result });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'সার্ভার ত্রুটি', error });
            }
        });
    },
    updateResult(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedResult = yield result_service_1.resultService.updateResult(req.params.id, req.body);
                if (!updatedResult) {
                    return res.status(404).json({ success: false, message: 'রেজাল্ট পাওয়া যায়নি' });
                }
                res.json({ success: true, message: 'রেজাল্ট আপডেট হয়েছে', data: updatedResult });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'সার্ভার ত্রুটি', error });
            }
        });
    },
    deleteResult(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedResult = yield result_service_1.resultService.deleteResult(req.params.id);
                if (!deletedResult) {
                    return res.status(404).json({ success: false, message: 'রেজাল্ট পাওয়া যায়নি' });
                }
                res.json({ success: true, message: 'রেজাল্ট ডিলিট হয়েছে' });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'সার্ভার ত্রুটি', error });
            }
        });
    },
};
