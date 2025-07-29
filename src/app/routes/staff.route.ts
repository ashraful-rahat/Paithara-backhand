import express from 'express';
import { staffController } from '../controller/staff.controller';
import { uploadSingle } from '../middlewares/fileUpload';
import { parseJsonData } from '../middlewares/parseJsonData';

const router = express.Router();

router.get('/', staffController.getAllStaff);

router.post('/create', uploadSingle, parseJsonData, staffController.createStaff);

router.get('/:id', staffController.getSingleStaff);

router.patch('/:id', uploadSingle, parseJsonData, staffController.updateStaff);

router.delete('/:id', staffController.deleteStaff);

export const staffRoutes = router;
