import { Request, Response, NextFunction } from 'express';
import * as authService from '../services/auth.service';
import httpStatus from 'http-status';

export const createFirstAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const admin = await authService.createFirstAdmin(req.body);
    res.status(httpStatus.CREATED).json({
      status: 'success',
      message: 'Admin created successfully',
      data: { email: admin.email, role: admin.role },
    });
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(httpStatus.CREATED).json({
      status: 'success',
      message: 'User registered successfully',
      data: { email: user.email, role: user.role },
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    // এখানে 'role' কে গ্রহণ করুন
    const { token, role } = await authService.loginUser(email, password);

    res.status(httpStatus.OK).json({
      status: 'success',
      message: 'Login successful',
      token,
      role, // 'role' কে রেসপন্সে যুক্ত করুন
    });
  } catch (error) {
    next(error);
  }
};

export const authController = {
  createFirstAdmin,
  registerUser,
  loginUser,
};