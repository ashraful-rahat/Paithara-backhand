import { Request, Response, NextFunction } from 'express';
import { staffService } from '../services/staff.service';
import httpStatus from 'http-status';

const createStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fileUrl = (req.file as any)?.path; // multer-storage-cloudinary puts the Cloudinary URL in req.file.path

    if (!fileUrl) {
      throw new Error('Photo upload failed or missing');
    }

    const data =
      typeof req.body.subjectPreferences === 'string'
        ? {
            ...req.body,
            subjectPreferences: JSON.parse(req.body.subjectPreferences),
            photo: fileUrl, // ✅ attach photo URL
          }
        : {
            ...req.body,
            photo: fileUrl, // ✅ attach photo URL
          };

    const result = await staffService.createStaff(data);
    res.status(httpStatus.CREATED).json({
      status: 'success',
      message: 'Staff created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await staffService.getAllStaff();
    res.status(httpStatus.OK).json({
      status: 'success',
      results: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await staffService.getStaffById(req.params.id);

    if (!result) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: 'fail',
        message: 'Staff not found',
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

const updateStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const data =
      typeof req.body.subjectPreferences === 'string'
        ? { ...req.body, subjectPreferences: JSON.parse(req.body.subjectPreferences) }
        : req.body;

    const result = await staffService.updateStaff(id, data);

    if (!result) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: 'fail',
        message: 'Staff not found',
      });
    }

    res.status(httpStatus.OK).json({
      status: 'success',
      message: 'Staff updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const staff = await staffService.getStaffById(req.params.id);
    if (!staff) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: 'fail',
        message: 'Staff not found',
      });
    }

    await staffService.deleteStaff(req.params.id);

    res.status(httpStatus.OK).json({
      status: 'success',
      message: 'Staff deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
console.log('httpStatus module:', httpStatus);

export const staffController = {
  createStaff,
  getAllStaff,
  getSingleStaff,
  updateStaff,
  deleteStaff,
};
