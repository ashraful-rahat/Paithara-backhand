import express from 'express';

import { uploadSingle } from '../middlewares/fileUpload';
import { parseJsonData } from '../middlewares/parseJsonData';
import { studentController } from '../controller/student.controller';

const router = express.Router();

router.get('/', studentController.getAllStudents);
router.post('/create', uploadSingle, parseJsonData, studentController.createStudent);
router.get('/:id', studentController.getSingleStudent);
router.patch('/:id', uploadSingle, parseJsonData, studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

export const studentRoutes = router;
