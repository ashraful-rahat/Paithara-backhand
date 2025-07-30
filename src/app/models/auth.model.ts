// src/app/models/auth.model.ts
import mongoose, { Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IAdmin {
  email: string;
  password: string;
}

export interface IAdminDocument extends IAdmin, Document {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const AdminSchema = new mongoose.Schema<IAdminDocument>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

AdminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

AdminSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

const AdminModel: Model<IAdminDocument> = mongoose.model<IAdminDocument>('Admin', AdminSchema);

export default AdminModel;
