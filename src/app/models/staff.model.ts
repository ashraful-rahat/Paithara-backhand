import mongoose, { Schema } from 'mongoose';

const classSubjectSchema = new Schema(
  {
    class: {
      type: String,
      enum: ['৬ষ্ঠ', '৭ম', '৮ম', '৯ম', '১০ম'],
      required: true,
    },
    subjects: {
      type: [String],
      enum: [
        // ৬-৮ম শ্রেণির বিষয়
        'বাংলা',
        'ইংরেজি',
        'গণিত',
        'সাধারণ বিজ্ঞান',
        'বাংলাদেশ ও বিশ্বপরিচয়',
        'হিন্দুধর্ম শিক্ষা',
        'ইসলাম ধর্ম শিক্ষা',
        'বিজ্ঞান',
        'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)',

        // ৯-১০ম শ্রেণির বিজ্ঞান গ্রুপ
        'পদার্থবিজ্ঞান',
        'রসায়ন',
        'জীববিজ্ঞান',

        // ৯-১০ম শ্রেণির ব্যবসায়/কমার্স গ্রুপ
        'হিসাববিজ্ঞান',
        'ব্যবসায় উদ্যোগ',
        'অর্থনীতি',
        'ব্যবসায় সংগঠন ও ব্যবস্থাপনা',
        'বাণিজ্য আইন ও গণিত',
        'ব্যাংকিং ও বিমা',

        // ৯-১০ম শ্রেণির মানবিক গ্রুপ
        'ইতিহাস',
        'ভূগোল',
        'সমাজবিজ্ঞান',
        'নাগরিকতা শিক্ষা',
        'মনোবিজ্ঞান',
        'গার্হস্থ্য বিজ্ঞান',

        // ধর্মীয় বিষয়
        'ইসলাম ধর্ম',
        'হিন্দু ধর্ম',
        'বৌদ্ধ ধর্ম',
        'খ্রিস্টান ধর্ম',

        // অতিরিক্ত
        'শারীরিক শিক্ষা ও স্বাস্থ্য',
        'শিল্প ও কারুশিল্প',
        'সাংস্কৃতিক শিক্ষা',
      ],
      required: true,
    },
  },
  { _id: false },
);

const StaffSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    category: {
      type: String,
      enum: [
        'সহকারী শিক্ষক',
        'প্রধান শিক্ষক',
        'বিষয় ভিত্তিক শিক্ষক',
        'ক্লার্ক',
        'দপ্তরী',
        'অতিথি শিক্ষক',
        'লাইব্রেরিয়ান',
        'গার্ড',
        'অ্যাকাউন্টেন্ট',
        'প্রশাসক',
      ],
      required: true,
    },
    subjectPreferences: {
      type: [classSubjectSchema],
      required: false, // optional, কারণ সব স্টাফদের প্রয়োজন না
    },
    qualification: { type: String },
    experience: { type: Number },
    address: { type: String },
    photo: { type: String, required: true },
    dateOfJoining: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const StaffModel = mongoose.model('Staff', StaffSchema);

export default StaffModel;
