export interface IStudent {
  name: string;
  roll: number;
  class: '৬ষ্ঠ' | '৭ম' | '৮ম' | '৯ম' | '১০ম';
  group?: 'বিজ্ঞান' | 'মানবিক' | 'ব্যবসায়' | 'সাধারণ';
  gender: 'ছাত্র' | 'ছাত্রী';
  fatherName: string;
  motherName: string;
  guardianNumber: string; // ✅ New field
  address?: string;
  photo?: string;
  dateOfBirth?: Date;
  isActive?: boolean;
}
