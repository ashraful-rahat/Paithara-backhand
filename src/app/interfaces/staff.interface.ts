export type StaffCategory =
  | 'সহকারী শিক্ষক'
  | 'প্রধান শিক্ষক'
  | 'বিষয় ভিত্তিক শিক্ষক'
  | 'ক্লার্ক'
  | 'দপ্তরী'
  | 'অতিথি শিক্ষক'
  | 'লাইব্রেরিয়ান'
  | 'গার্ড'
  | 'অ্যাকাউন্টেন্ট'
  | 'প্রশাসক';

export type SSCSubject =
  | 'বাংলা'
  | 'ইংরেজি'
  | 'গণিত'
  | 'সাধারণ বিজ্ঞান'
  | 'বাংলাদেশ ও বিশ্বপরিচয়'
  | 'হিন্দুধর্ম শিক্ষা'
  | 'ইসলাম ধর্ম শিক্ষা'
  | 'বিজ্ঞান'
  | 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)'
  | 'পদার্থবিজ্ঞান'
  | 'রসায়ন'
  | 'জীববিজ্ঞান'
  | 'হিসাববিজ্ঞান'
  | 'ব্যবসায় উদ্যোগ'
  | 'অর্থনীতি'
  | 'ব্যবসায় সংগঠন ও ব্যবস্থাপনা'
  | 'বাণিজ্য আইন ও গণিত'
  | 'ব্যাংকিং ও বিমা'
  | 'ইতিহাস'
  | 'ভূগোল'
  | 'সমাজবিজ্ঞান'
  | 'নাগরিকতা শিক্ষা'
  | 'মনোবিজ্ঞান'
  | 'গার্হস্থ্য বিজ্ঞান'
  | 'ইসলাম ধর্ম'
  | 'হিন্দু ধর্ম'
  | 'বৌদ্ধ ধর্ম'
  | 'খ্রিস্টান ধর্ম'
  | 'শারীরিক শিক্ষা ও স্বাস্থ্য'
  | 'শিল্প ও কারুশিল্প'
  | 'সাংস্কৃতিক শিক্ষা';

export type SchoolClass = '৬ষ্ঠ' | '৭ম' | '৮ম' | '৯ম' | '১০ম';

export interface ClassSubjectPreference {
  class: SchoolClass;
  subjects: SSCSubject[]; // array of subjects per class
}

export interface IStaff {
  _id?: string;
  name: string;
  email?: string;
  phone?: string;
  category: StaffCategory; // dropdown select option
  subjectPreferences?: ClassSubjectPreference[]; // teachers only, array of class-subject pairs
  qualification?: string;
  experience?: number;
  address?: string;
  photo?: string;
  dateOfJoining?: Date;
  isActive?: boolean;
}
