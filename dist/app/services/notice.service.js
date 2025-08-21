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
exports.noticeService = void 0;
const notice_model_1 = require("../models/notice.model");
exports.noticeService = {
    createNotice(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield notice_model_1.Notice.create(data);
        });
    },
    getAllNotices() {
        return __awaiter(this, void 0, void 0, function* () {
            // .sort() মেথডটি বাদ দেওয়া হয়েছে
            const result = yield notice_model_1.Notice.find();
            // ডেটাগুলো মেমরিতে সাজানো হচ্ছে, 'undefined' মানগুলোকেও নিরাপদভাবে পরিচালনা করা হচ্ছে
            return result.sort((a, b) => {
                const dateA = a.createdAt || new Date(0);
                const dateB = b.createdAt || new Date(0);
                return dateB.getTime() - dateA.getTime();
            });
        });
    },
    getNoticeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield notice_model_1.Notice.findById(id);
        });
    },
    updateNotice(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield notice_model_1.Notice.findByIdAndUpdate(id, data, { new: true });
        });
    },
    deleteNotice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield notice_model_1.Notice.findByIdAndDelete(id);
        });
    },
};
