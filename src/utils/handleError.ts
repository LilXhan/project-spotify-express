import { Response } from 'express'

export const handleHttpError = (res: Response, message: string, code: number) => {
  res.status(code).json({
    status: 'FAILED',
    data: {
      error: message
    } 
  });
};

