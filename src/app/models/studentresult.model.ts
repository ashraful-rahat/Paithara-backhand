import { Schema, model, Document } from "mongoose";

// --- Subject sub-schema ---
const SubjectMarkSchema = new Schema(
  {
    subject: { type: String, required: true },    // যেমন বাংলা, ইংরেজি
    written: { type: Number, required: true },
    mcq: { type: Number },
    practical: { type: Number },
    total: { type: Number, required: true },
    grade: { type: String, required: true },
    gpa: { type: Number, required: true },
  },
  { _id: false } 
);

// --- Individual Result schema ---
const IndividualResultSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "Student",   // ✅ IStudent model এর সাথে সম্পর্ক
      required: true,
    },
    examType: {
      type: String,
      enum: ["অর্ধ-বার্ষিক", "বার্ষিক"],
      required: true,
    },
    year: { type: Number, required: true },
    class: { type: Number, enum: [6, 7, 8, 9, 10], required: true },
    group: {
      type: String,
      enum: ["বিজ্ঞান", "মানবিক", "বাণিজ্য", "সাধারণ"],
    },
    subjects: {
      type: [SubjectMarkSchema],
      required: true,
    },
    totalMarks: { type: Number, required: true },
    gpa: { type: Number, required: true },
    grade: { type: String, required: true },
    position: { type: Number },
  },
  { timestamps: true } // createdAt, updatedAt auto add হবে
);

// --- Model export ---
export const IndividualResultModel = model<Document>(
  "IndividualResult",
  IndividualResultSchema
);
