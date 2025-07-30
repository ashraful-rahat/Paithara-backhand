import AdminModel from '../models/admin.model';
import jwt from 'jsonwebtoken';

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
