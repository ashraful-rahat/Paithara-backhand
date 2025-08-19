import mongoose, { Schema, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUserDocument } from '../interfaces/auth.interface';

const UserSchema = new Schema<IUserDocument>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'student'], default: 'student' },
  },
  { timestamps: true },
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

const UserModel: Model<IUserDocument> = mongoose.model<IUserDocument>('User', UserSchema);

export default UserModel;