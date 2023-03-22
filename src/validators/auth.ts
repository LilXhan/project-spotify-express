import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';
import validateResults from '../utils/handleValidator';

export const validatorRegister = [
  check('name').exists().notEmpty().isLength({min: 3, max: 99}),
  check('age').exists().notEmpty().isNumeric(),
  check('password').exists().notEmpty().isLength({min: 8, max: 20}),
  check('email').exists().notEmpty().isEmail(),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next);
  }
];

export const validatorLogin = [
  check('password').exists().notEmpty().isLength({min: 8, max: 20}),
  check('email').exists().notEmpty().isEmail(),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next);
  }
];