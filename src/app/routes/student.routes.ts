import express from 'express';

import { uploadSingle } from '../middlewares/fileUpload';
import { studentController } from '../controller/student.controller';

const router = express.Router();

router.get('/', studentController.getAllStudents);
router.post('/create', uploadSingle, studentController.createStudent); // parseJsonData middleware সরানো হয়েছে
router.get('/:id', studentController.getSingleStudent);
router.patch('/:id', uploadSingle, studentController.updateStudent); // parseJsonData middleware সরানো হয়েছে
router.delete('/:id', studentController.deleteStudent);

export const studentRoutes = router;
