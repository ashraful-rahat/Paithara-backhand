import { Notice } from '../models/notice.model';
import { INotice } from '../interfaces/notice.interface';

export const noticeService = {
  async createNotice(data: INotice) {
    return await Notice.create(data);
  },

  async getAllNotices() {
    // .sort() মেথডটি বাদ দেওয়া হয়েছে
    const result = await Notice.find();
    // ডেটাগুলো মেমরিতে সাজানো হচ্ছে, 'undefined' মানগুলোকেও নিরাপদভাবে পরিচালনা করা হচ্ছে
    return result.sort((a, b) => {
      const dateA = a.createdAt || new Date(0);
      const dateB = b.createdAt || new Date(0);
      return dateB.getTime() - dateA.getTime();
    });
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
