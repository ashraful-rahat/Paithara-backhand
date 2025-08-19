import { Router } from 'express';
import { applicationController } from '../controller/application.controller';
import { uploadSingle } from '../middlewares/fileUpload';
import { parseJsonData } from '../middlewares/parseJsonData';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// শুধুমাত্র লগইন করা ব্যবহারকারীরা আবেদন জমা দিতে পারবে
router.post('/create', authenticate(['student', 'admin']), uploadSingle, parseJsonData, applicationController.createApplication);

// শুধুমাত্র অ্যাডমিনরা সব আবেদন দেখতে পারবে
router.get('/', authenticate(['admin']), applicationController.getAllApplications);
router.get('/:id', authenticate(['admin']), applicationController.getSingleApplication);
router.patch('/:id', authenticate(['admin']), uploadSingle, parseJsonData, applicationController.updateApplication);
router.delete('/:id', authenticate(['admin']), applicationController.deleteApplication);

export const applicationRoutes = router;
