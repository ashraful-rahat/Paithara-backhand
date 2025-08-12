import { Types } from 'mongoose';

export interface INotice {
  _id?: Types.ObjectId;
  title: string;
  link?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
