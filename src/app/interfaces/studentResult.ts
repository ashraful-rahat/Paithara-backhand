export interface ISubjectMark {
  subject: string;      // যেমন বাংলা, ইংরেজি
  written: number;      // লিখিত নাম্বার
  mcq?: number;         // এমসিকিউ (optional)
  practical?: number;   // প্র্যাকটিক্যাল (optional)
  total: number;        // মোট নাম্বার
  grade: string;        // যেমন A+, A
  gpa: number;          // GPA value
}

export interface IIndividualResult {
  _id?: string;
  studentId: string;    // IStudent এর reference
  examType: 'অর্ধ-বার্ষিক' | 'বার্ষিক';
  year: number;
  class: 6 | 7 | 8 | 9 | 10;
  group?: 'বিজ্ঞান' | 'মানবিক' | 'বাণিজ্য' | 'সাধারণ';
  subjects: ISubjectMark[];  // subject-wise marks
  totalMarks: number;
  gpa: number;
  grade: string;
  position?: number;     // র‍্যাঙ্ক (optional)
  createdAt?: Date;
  updatedAt?: Date;
}
