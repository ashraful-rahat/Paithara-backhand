import express from 'express';
import { studentController } from '../controller/student.controller';
import { uploadSingle } from '../middlewares/fileUpload';
import { authenticate } from '../middlewares/auth.middleware';


const router = express.Router();

router.get('/',  studentController.getAllStudents);
router.get('/:id', studentController.getSingleStudent);

// শুধুমাত্র অ্যাডমিনদের জন্য
router.post('/create', authenticate(['admin']), uploadSingle, studentController.createStudent);
router.patch('/:id', authenticate(['admin']), uploadSingle, studentController.updateStudent);
router.delete('/:id', authenticate(['admin']), studentController.deleteStudent);

export const studentRoutes = router;