// src/app/routes/auth.routes.ts
import express from 'express';
import { authController } from '../controller/auth.controller';

const router = express.Router();

router.post('/create', authController.createAdmin);
router.post('/login', authController.loginAdmin);

export const authRoutes = router;
