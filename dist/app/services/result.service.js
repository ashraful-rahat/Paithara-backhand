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
exports.resultService = void 0;
const Result_model_1 = require("../models/Result.model");
exports.resultService = {
    createResult(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Result_model_1.Result.create(data);
        });
    },
    getAllResults() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield Result_model_1.Result.find();
            return results.sort((a, b) => {
                const dateA = a.createdAt || new Date(0);
                const dateB = b.createdAt || new Date(0);
                return dateB.getTime() - dateA.getTime();
            });
        });
    },
    getResultById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Result_model_1.Result.findById(id);
        });
    },
    updateResult(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Result_model_1.Result.findByIdAndUpdate(id, data, { new: true });
        });
    },
    deleteResult(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Result_model_1.Result.findByIdAndDelete(id);
        });
    },
};
