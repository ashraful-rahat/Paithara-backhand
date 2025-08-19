import { Router } from 'express';
import { noticeController } from '../controller/notice.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authenticate(['admin']), noticeController.createNotice);
router.put('/:id', authenticate(['admin']), noticeController.updateNotice);
router.delete('/:id', authenticate(['admin']), noticeController.deleteNotice);


router.get('/', noticeController.getAllNotices);
router.get('/:id', noticeController.getNoticeById);

export const noticeRoutes = router;
