import { IStaff } from '../interfaces/staff.interface';
import StaffModel from '../models/staff.model';

const createStaff = async (data: IStaff) => {
  return await StaffModel.create(data);
};

const getAllStaff = async () => {
  return await StaffModel.find().sort({ createdAt: -1 });
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
