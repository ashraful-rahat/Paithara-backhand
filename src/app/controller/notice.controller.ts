import { Request, Response } from 'express';
import { noticeService } from '../services/notice.service';

export const noticeController = {
  async createNotice(req: Request, res: Response) {
    try {
      const notice = await noticeService.createNotice(req.body);
      res.status(201).json({
        success: true,
        message: 'Notice created successfully',
        data: notice,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error', error });
    }
  },

  async getAllNotices(req: Request, res: Response) {
    try {
      const notices = await noticeService.getAllNotices();
      res.json({ success: true, data: notices });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error', error });
    }
  },

  async getNoticeById(req: Request, res: Response) {
    try {
      const notice = await noticeService.getNoticeById(req.params.id);
      if (!notice) {
        return res.status(404).json({ success: false, message: 'Notice not found' });
      }
      res.json({ success: true, data: notice });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error', error });
    }
  },

  async updateNotice(req: Request, res: Response) {
    try {
      const updatedNotice = await noticeService.updateNotice(req.params.id, req.body);
      if (!updatedNotice) {
        return res.status(404).json({ success: false, message: 'Notice not found' });
      }
      res.json({ success: true, message: 'Notice updated successfully', data: updatedNotice });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error', error });
    }
  },

  async deleteNotice(req: Request, res: Response) {
    try {
      const deletedNotice = await noticeService.deleteNotice(req.params.id);
      if (!deletedNotice) {
        return res.status(404).json({ success: false, message: 'Notice not found' });
      }
      res.json({ success: true, message: 'Notice deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error', error });
    }
  },
};
