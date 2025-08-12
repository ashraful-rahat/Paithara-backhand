import { IStudent } from '../interfaces/student.interface';
import StudentModel from '../models/student.model';

const createStudent = async (data: IStudent) => {
  return await StudentModel.create(data);
};

const getStudents = async () => {
  return await StudentModel.find();
};

const getStudentById = async (id: string) => {
  return await StudentModel.findById(id);
};

const updateStudent = async (id: string, data: Partial<IStudent>) => {
  return await StudentModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteStudent = async (id: string) => {
  return await StudentModel.findByIdAndDelete(id);
};

export const studentService = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
