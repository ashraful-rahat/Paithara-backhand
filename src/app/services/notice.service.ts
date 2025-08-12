import { Notice } from '../models/notice.model';
import { INotice } from '../interfaces/notice.interface';

export const noticeService = {
  async createNotice(data: INotice) {
    return await Notice.create(data);
  },

  async getAllNotices() {
    return await Notice.find().sort({ createdAt: -1 });
  },

  async getNoticeById(id: string) {
    return await Notice.findById(id);
  },

  async updateNotice(id: string, data: Partial<INotice>) {
    return await Notice.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteNotice(id: string) {
    return await Notice.findByIdAndDelete(id);
  },
};
