"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffRoutes = void 0;
const express_1 = __importDefault(require("express"));
const staff_controller_1 = require("../controller/staff.controller");
const fileUpload_1 = require("../middlewares/fileUpload");
const parseJsonData_1 = require("../middlewares/parseJsonData");
const auth_middleware_1 = require("../middlewares/auth.middleware"); // authenticate middleware ইমপোর্ট করা হয়েছে
const router = express_1.default.Router();
// শুধুমাত্র অ্যাডমিনদের জন্য সুরক্ষিত রুট
router.post('/create', (0, auth_middleware_1.authenticate)(['admin']), fileUpload_1.uploadSingle, parseJsonData_1.parseJsonData, staff_controller_1.staffController.createStaff);
router.patch('/:id', (0, auth_middleware_1.authenticate)(['admin']), fileUpload_1.uploadSingle, parseJsonData_1.parseJsonData, staff_controller_1.staffController.updateStaff);
router.delete('/:id', (0, auth_middleware_1.authenticate)(['admin']), staff_controller_1.staffController.deleteStaff);
router.get('/', staff_controller_1.staffController.getAllStaff);
router.get('/:id', staff_controller_1.staffController.getSingleStaff);
exports.staffRoutes = router;
