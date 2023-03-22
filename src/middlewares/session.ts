import { Request, Response, NextFunction } from 'express';
import { handleHttpError } from '../utils/handleError';
import { tokenVerify } from '../utils/handleJwt';
import models from '../models';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ').pop();

    let message: string = '';

    if(!token) {
      message = 'Unauthorized';
    } else {
      try {
        const dataToken = await tokenVerify(token);
        const user = await models.usersModel.findById(dataToken._id);
        user.set('password', undefined, {strict: false});
        req.user = user;
        next();
      } catch (error) {
        handleHttpError(res, 'Unauthorized', 401)
      }
    }

    if (message) {
      handleHttpError(res, message, 401)
    }

  } catch (error: any) {
    handleHttpError(res, error.message, 401)
  }
};

export default authMiddleware;