import jwt, { SignOptions } from 'jsonwebtoken';
import ms from 'ms';
import { IUser } from '../interfaces/auth.interface';
import UserModel from '../models/auth.model';

export const registerUser = async (data: IUser) => {
  const existingUser = await UserModel.findOne({ email: data.email });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  const user = await UserModel.create(data);
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const signOptions: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN as ms.StringValue) || '1h',
  };

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET as string,
    signOptions,
  );

  // এখানে token এবং role উভয়ই রিটার্ন করা হচ্ছে
  return { token, role: user.role };
};

export const createFirstAdmin = async (data: IUser) => {
  const existingAdminsCount = await UserModel.countDocuments({ role: 'admin' });
  if (existingAdminsCount > 0) {
    throw new Error('Admin user already exists. Cannot create a new one.');
  }

  const admin = await UserModel.create({ ...data, role: 'admin' });
  return admin;
};
