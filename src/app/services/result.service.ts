import { IResult } from "../interfaces/IResult.interface";
import { Result } from "../models/Result.model";

export const resultService = {
  async createResult(data: IResult) {
    return await Result.create(data);
  },

  async getAllResults() {
    const results = await Result.find();
    return results.sort((a, b) => {
      const dateA = a.createdAt || new Date(0);
      const dateB = b.createdAt || new Date(0);
      return dateB.getTime() - dateA.getTime();
    });
  },

  async getResultById(id: string) {
    return await Result.findById(id);
  },

  async updateResult(id: string, data: Partial<IResult>) {
    return await Result.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteResult(id: string) {
    return await Result.findByIdAndDelete(id);
  },
};
