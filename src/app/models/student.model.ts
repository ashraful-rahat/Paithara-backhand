import mongoose, { Document } from 'mongoose';
import { IStudent } from '../interfaces/student.interface';

const StudentSchema = new mongoose.Schema<IStudent & Document>(
  {
    name: { type: String, required: true },
    roll: { type: Number, required: true },
    class: {
      type: String,
      enum: ['৬ষ্ঠ', '৭ম', '৮ম', '৯ম', '১০ম'],
      required: true,
    },
    group: {
      type: String,
      enum: ['বিজ্ঞান', 'মানবিক', 'ব্যবসায়', 'সাধারণ'],

      required: function (this: IStudent) {
        return ['৯ম', '১০ম'].includes(this.class);
      },
    },
    gender: { type: String, enum: ['ছাত্র', 'ছাত্রী'], required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    guardianNumber: { type: String, required: true },
    address: { type: String },
    photo: { type: String },
    dateOfBirth: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const StudentModel = mongoose.model<IStudent & Document>('Student', StudentSchema);

export default StudentModel;
