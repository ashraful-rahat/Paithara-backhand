import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema(
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
    },
    gender: { type: String, enum: ['ছাত্র', 'ছাত্রী'], required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    guardianNumber: { type: String, required: true }, // ✅ New field
    address: { type: String },
    photo: { type: String },
    dateOfBirth: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const StudentModel = mongoose.model('Student', StudentSchema);

export default StudentModel;
