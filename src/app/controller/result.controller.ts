import { Request, Response } from 'express';
import { resultService } from '../services/result.service';

export const resultController = {
  async createResult(req: Request, res: Response) {
    try {
      const result = await resultService.createResult(req.body);
      res.status(201).json({
        success: true,
        message: 'রেজাল্ট সফলভাবে যুক্ত হয়েছে',
        data: result,
      });
    } catch (error: any) {
      if (error.code === 11000) {
        return res.status(409).json({
          success: false,
          message: 'এই রেজাল্টটি ইতোমধ্যে বিদ্যমান',
        });
      }
      res.status(500).json({ success: false, message: 'সার্ভার ত্রুটি', error });
    }
  },

  async getAllResults(req: Request, res: Response) {
    try {
      const results = await resultService.getAllResults();
      res.json({ success: true, data: results });
    } catch (error) {
      res.status(500).json({ success: false, message: 'সার্ভার ত্রুটি', error });
    }
  },

  async getResultById(req: Request, res: Response) {
    try {
      const result = await resultService.getResultById(req.params.id);
      if (!result) {
        return res.status(404).json({ success: false, message: 'রেজাল্ট পাওয়া যায়নি' });
      }
      res.json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: 'সার্ভার ত্রুটি', error });
    }
  },

  async updateResult(req: Request, res: Response) {
    try {
      const updatedResult = await resultService.updateResult(req.params.id, req.body);
      if (!updatedResult) {
        return res.status(404).json({ success: false, message: 'রেজাল্ট পাওয়া যায়নি' });
      }
      res.json({ success: true, message: 'রেজাল্ট আপডেট হয়েছে', data: updatedResult });
    } catch (error) {
      res.status(500).json({ success: false, message: 'সার্ভার ত্রুটি', error });
    }
  },

  async deleteResult(req: Request, res: Response) {
    try {
      const deletedResult = await resultService.deleteResult(req.params.id);
      if (!deletedResult) {
        return res.status(404).json({ success: false, message: 'রেজাল্ট পাওয়া যায়নি' });
      }
      res.json({ success: true, message: 'রেজাল্ট ডিলিট হয়েছে' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'সার্ভার ত্রুটি', error });
    }
  },
};
