import { Request, Response, NextFunction } from 'express';

import httpStatus from 'http-status';
import { IApplication } from '../interfaces/application.interface';
import { applicationService } from '../services/application.service';

const createApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fileUrl = (req.file as any)?.path; // multer-storage-cloudinary থেকে ছবির URL

    if (!fileUrl) {
      throw new Error('Photo upload failed or missing');
    }

    const { userId, ...restOfData } = req.body;
    
    // ফ্রন্টএন্ড থেকে আসা ডেটা
    const data: Partial<IApplication> = {
      ...restOfData,
      photo: fileUrl,
      userId: userId,
    };

    const result = await applicationService.createApplication(data as IApplication);
    
    res.status(httpStatus.CREATED).json({
      status: 'success',
      message: 'Application created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllApplications = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await applicationService.getAllApplications();
    res.status(httpStatus.OK).json({
      status: 'success',
      results: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await applicationService.getApplicationById(req.params.id);

    if (!result) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: 'fail',
        message: 'Application not found',
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

const updateApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const fileUrl = (req.file as any)?.path;

    const updateData = {
      ...req.body,
      ...(fileUrl && { photo: fileUrl }), // যদি নতুন ছবি থাকে, তাহলে তা যুক্ত করা হবে
    };
    
    const result = await applicationService.updateApplication(id, updateData);

    if (!result) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: 'fail',
        message: 'Application not found',
      });
    }

    res.status(httpStatus.OK).json({
      status: 'success',
      message: 'Application updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const application = await applicationService.getApplicationById(req.params.id);
    if (!application) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: 'fail',
        message: 'Application not found',
      });
    }

    await applicationService.deleteApplication(req.params.id);

    res.status(httpStatus.OK).json({
      status: 'success',
      message: 'Application deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const applicationController = {
  createApplication,
  getAllApplications,
  getSingleApplication,
  updateApplication,
  deleteApplication,
};