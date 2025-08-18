import { IStaff } from '../interfaces/staff.interface';
import StaffModel from '../models/staff.model';

const createStaff = async (data: IStaff) => {
  return await StaffModel.create(data);
};

const getAllStaff = async () => {
  // .sort() মেথডটি বাদ দেওয়া হয়েছে
  const result = await StaffModel.find();
  // ডেটাগুলো মেমরিতে সাজানো হচ্ছে
  return result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

const getStaffById = async (id: string) => {
  return await StaffModel.findById(id);
};

const updateStaff = async (id: string, data: Partial<IStaff>) => {
  return await StaffModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteStaff = async (id: string) => {
  return await StaffModel.findByIdAndDelete(id);
};

export const staffService = {
  createStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
};