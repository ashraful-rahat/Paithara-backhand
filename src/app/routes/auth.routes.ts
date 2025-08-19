import express from 'express';
import { authController } from '../controller/auth.controller';

const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/create-first-admin', authController.createFirstAdmin);

export const authRoutes = router;