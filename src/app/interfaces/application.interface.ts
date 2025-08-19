
import { Document } from 'mongoose';

export interface IApplication extends Document {

  studentNameBn: string;
  studentNameEn: string;
  dateOfBirth: Date;
  gender: string;
  birthCertificateNo: string;
  religion: string;
  bloodGroup?: string;
  photo: string; 


  applyingForClass: string;
  previousSchoolName: string;
  lastExamResult: string;


  fatherNameBn: string;
  fatherNameEn: string;
  fatherOccupation: string;
  fatherNid: string;
  motherNameBn: string;
  motherNameEn: string;
  motherOccupation: string;
  motherNid: string;
  guardianContact: string;


  presentAddress: string;
  permanentAddress: string;
  

  userId: string;


  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}
