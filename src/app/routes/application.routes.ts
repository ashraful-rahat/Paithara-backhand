import { Router } from 'express';
import { applicationController } from '../controller/application.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { uploadSingle } from '../middlewares/fileUpload';
import { parseJsonData } from '../middlewares/parseJsonData';

const router = Router();

router.post(
  '/create',
  authenticate(['student', 'admin']),
  uploadSingle,
  parseJsonData,
  applicationController.createApplication,
);

router.get('/', authenticate(['admin']), applicationController.getAllApplications);
router.get('/:id', authenticate(['admin']), applicationController.getSingleApplication);
router.patch(
  '/:id',
  authenticate(['admin']),
  uploadSingle,
  parseJsonData,
  applicationController.updateApplication,
);
router.delete('/:id', authenticate(['admin']), applicationController.deleteApplication);

export const applicationRoutes = router;
