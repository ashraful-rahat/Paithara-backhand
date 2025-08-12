import { Schema, model } from 'mongoose';
import { INotice } from '../interfaces/notice.interface';

const noticeSchema = new Schema<INotice>(
  {
    title: { type: String, required: true, trim: true },
    link: { type: String, default: '#' },
  },
  {
    timestamps: true,
  },
);

export const Notice = model<INotice>('Notice', noticeSchema);
