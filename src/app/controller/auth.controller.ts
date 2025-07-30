// src/app/controllers/auth.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as authService from '../services/auth.service';
import httpStatus from 'http-status';

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const admin = await authService.createAdmin(req.body);
    res.status(httpStatus.CREATED).json({
      status: 'success',
      message: 'Admin created successfully',
      data: { email: admin.email },
    });
  } catch (error) {
    next(error);
  }
};

const loginAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const { token } = await authService.loginAdmin(email, password);

    res.status(httpStatus.OK).json({
      status: 'success',
      message: 'Login successful',
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const authController = {
  createAdmin,
  loginAdmin,
};
