import { Document } from 'mongoose';

export type UserRole = 'admin' | 'student';

export interface IUser {
  email: string;
  password?: string;
  role?: UserRole; // role is optional during registration
}

export interface IUserDocument extends IUser, Document {
  comparePassword(candidatePassword: string): Promise<boolean>;
}