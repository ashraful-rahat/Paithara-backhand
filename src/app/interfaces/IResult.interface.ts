export type GroupType = 'বিজ্ঞান' | 'বাণিজ্য' | 'মানবিক' | null;
export type ExamType = 'অর্ধ-বার্ষিক' | 'বার্ষিক';

export interface IResult {
  _id?: string;
  class: 6 | 7 | 8 | 9 | 10;
  group?: GroupType; 
  examType: ExamType; // অর্ধ-বার্ষিক / বার্ষিক
  totalStudents: number; // মোট শিক্ষার্থীর সংখ্যা
  passed: number;        // পাস করেছে
  failed: number;        // ফেল করেছে
  year: number;          // সাল
  createdAt?: Date;
  updatedAt?: Date;
}
