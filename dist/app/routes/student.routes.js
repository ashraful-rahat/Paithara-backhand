"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("../controller/student.controller");
const fileUpload_1 = require("../middlewares/fileUpload");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.get('/', (0, auth_middleware_1.authenticate)(), student_controller_1.studentController.getAllStudents);
router.get('/:id', (0, auth_middleware_1.authenticate)(), student_controller_1.studentController.getSingleStudent);
// শুধুমাত্র অ্যাডমিনদের জন্য
router.post('/create', (0, auth_middleware_1.authenticate)(['admin']), fileUpload_1.uploadSingle, student_controller_1.studentController.createStudent);
router.patch('/:id', (0, auth_middleware_1.authenticate)(['admin']), fileUpload_1.uploadSingle, student_controller_1.studentController.updateStudent);
router.delete('/:id', (0, auth_middleware_1.authenticate)(['admin']), student_controller_1.studentController.deleteStudent);
exports.studentRoutes = router;
