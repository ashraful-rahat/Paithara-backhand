import express from 'express';
import { staffController } from '../controller/staff.controller';
import { uploadSingle } from '../middlewares/fileUpload';
import { parseJsonData } from '../middlewares/parseJsonData';
import { authenticate } from '../middlewares/auth.middleware'; // authenticate middleware ইমপোর্ট করা হয়েছে

const router = express.Router();

// শুধুমাত্র অ্যাডমিনদের জন্য সুরক্ষিত রুট
router.post('/create', authenticate(['admin']), uploadSingle, parseJsonData, staffController.createStaff);
router.patch('/:id', authenticate(['admin']), uploadSingle, parseJsonData, staffController.updateStaff);
router.delete('/:id', authenticate(['admin']), staffController.deleteStaff);


router.get('/', staffController.getAllStaff);
router.get('/:id', staffController.getSingleStaff);

export const staffRoutes = router;
