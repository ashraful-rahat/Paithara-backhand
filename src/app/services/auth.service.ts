// src/app/services/auth.service.ts
import AdminModel from '../models/auth.model';
import jwt from 'jsonwebtoken';
import { IAdmin } from '../interfaces/auth.interface';

export const createAdmin = async (data: IAdmin) => {
  const existingAdmin = await AdminModel.findOne({ email: data.email });
  if (existingAdmin) throw new Error('Admin already exists');

  const admin = new AdminModel(data);
  await admin.save();
  return admin;
};

export const loginAdmin = async (email: string, password: string) => {
  const admin = await AdminModel.findOne({ email });
  if (!admin) throw new Error('Admin not found');

  const isMatch = await admin.comparePassword(password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN ?? '1h',
  });

  return { token };
};
