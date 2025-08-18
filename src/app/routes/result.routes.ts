import { Router } from 'express';
import { resultController } from '../controller/result.controller';

const router = Router();

router.post('/', resultController.createResult);
router.get('/', resultController.getAllResults);
router.get('/:id', resultController.getResultById);
router.put('/:id', resultController.updateResult);
router.delete('/:id', resultController.deleteResult);

export const resultRoutes = router;
