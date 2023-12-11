import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IClasses } from './class.interface';

const createClass: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    console.log('hello');
    console.log('my request is = ', req);
    //   const { student, ...userData } = req.body;
    // const result = await ClassService.crateClass(req.body);

    sendResponse<IClasses>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student created successfully!',
      // data: result,
    });
  }
);

export const ClassController = {
  createClass,
};