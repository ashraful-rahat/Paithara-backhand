import { IApplication } from '../interfaces/application.interface';
import ApplicationModel from '../models/application.model';

const createApplication = async (data: IApplication) => {
  return await ApplicationModel.create(data);
};

const getAllApplications = async () => {
  const result = await ApplicationModel.find().sort({ createdAt: -1 }); // নতুন আবেদনগুলো প্রথমে দেখাবে
  return result;
};

const getApplicationById = async (id: string) => {
  return await ApplicationModel.findById(id);
};

const updateApplication = async (id: string, data: Partial<IApplication>) => {
  return await ApplicationModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteApplication = async (id: string) => {
  return await ApplicationModel.findByIdAndDelete(id);
};

export const applicationService = {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
};