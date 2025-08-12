import { Router } from 'express';
import { noticeController } from '../controller/notice.controller';

const router = Router();

router.post('/', noticeController.createNotice);
router.get('/', noticeController.getAllNotices);
router.get('/:id', noticeController.getNoticeById);
router.put('/:id', noticeController.updateNotice);
router.delete('/:id', noticeController.deleteNotice);

export const noticeRoutes = router;
