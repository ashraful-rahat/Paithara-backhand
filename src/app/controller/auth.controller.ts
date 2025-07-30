import { Request, Response, NextFunction } from 'express';
import { loginAdmin } from '../services/auth.service';
import httpStatus from 'http-status';

export const adminLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const { token } = await loginAdmin(email, password);

    res.status(httpStatus.OK).json({
      status: 'success',
      message: 'Login successful',
      token,
    });
  } catch (error) {
    next(error);
  }
};
