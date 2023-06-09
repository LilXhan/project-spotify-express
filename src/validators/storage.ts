import { check } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import validateResults from '../utils/handleValidator';

export const validatorGetId = [
  check('id').exists().notEmpty().isMongoId(),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next);
  }
];
