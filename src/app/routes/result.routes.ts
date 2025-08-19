import { Router } from 'express';
import { resultController } from '../controller/result.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();


router.post('/', authenticate(['admin']), resultController.createResult);
router.put('/:id', authenticate(['admin']), resultController.updateResult);
router.delete('/:id', authenticate(['admin']), resultController.deleteResult);


router.get('/', resultController.getAllResults);
router.get('/:id', resultController.getResultById);

export const resultRoutes = router;