import { Request, Response, NextFunction } from 'express';
import { studentService } from '../services/student.service';
import httpStatus from 'http-status';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Check and log the received body and file from the frontend
    console.log('Received Body:', req.body);
    console.log('Received File:', req.file);

    // Ensure req.file exists before trying to access its path
    const fileUrl = (req.file as any)?.path;

    if (!fileUrl) {
      console.error('Error: Photo upload failed or missing.');
      throw new Error('Photo upload failed or missing');
    }

    // Log the file URL to confirm it was uploaded successfully
    console.log('File uploaded successfully to:', fileUrl);

    // The data object to be passed to the service
    const data = {
      ...req.body,
      photo: fileUrl,
    };

    // Log the final data object before sending it to the database
    console.log('Final data to be saved:', data);

    const result = await studentService.createStudent(data);

    // Log the result from the service before sending the final response
    console.log('Database save result:', result);

    res.status(httpStatus.CREATED).json({
      status: 'success',
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: any) {
    // Log the specific error that caused the 500 status
    console.error('Caught an error in createStudent controller:', error.message);
    next(error);
  }
};

const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentService.getStudents();
    res.status(httpStatus.OK).json({
      status: 'success',
      results: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentService.getStudentById(req.params.id);

    if (!result) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: 'fail',
        message: 'Student not found',
      });
    }

    res.status(httpStatus.OK).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const fileUrl = (req.file as any)?.path;

    const data = {
      ...req.body,
      ...(fileUrl && { photo: fileUrl }), // only update photo if new one provided
    };

    const result = await studentService.updateStudent(id, data);

    if (!result) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: 'fail',
        message: 'Student not found',
      });
    }

    res.status(httpStatus.OK).json({
      status: 'success',
      message: 'Student updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    if (!student) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: 'fail',
        message: 'Student not found',
      });
    }

    await studentService.deleteStudent(req.params.id);

    res.status(httpStatus.OK).json({
      status: 'success',
      message: 'Student deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
