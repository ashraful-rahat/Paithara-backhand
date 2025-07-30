import express from 'express';
import { adminLogin } from '../controller/auth.controller';

const router = express.Router();

router.post('/login', adminLogin);

export const authRoutes = router;
