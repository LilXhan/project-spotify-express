import { Request, Response, NextFunction } from 'express';
import { handleHttpError } from '../utils/handleError';

const checkRol = (roles: [string]) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const { role: rolesUser } = req.user;

    const checkValueRol = roles.some(rol => rolesUser.includes(rol)); // true or false

    if (!checkValueRol) {
      handleHttpError(res, 'User Not Permissions', 403);
    } else {
      next();
    };
  } catch (error: any) {
    handleHttpError(res, 'User Not Permissions', 403)
  }
};

export default checkRol;