import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import { encryptPassword, comparePassword } from '../utils/handleHashPassword';
import models from '../models';
import { tokenSign } from '../utils/handleJwt';
import { handleHttpError } from '../utils/handleError';

// this controller is in charge of register a user
export const registerController = async (req: Request, res: Response) => {
  try {
    const data = matchedData(req);
    const { password } = data;
    const hashedPassword = await encryptPassword(password);
    const body = { ...data, password: hashedPassword };
    const dataUser = await models.usersModel.create(body);
    dataUser.set('password', undefined, {strict: false});
    
    res.status(201).json({
      status: 'OK',
      data: dataUser,
      token: await tokenSign(dataUser.id, dataUser.role);
    });
  } catch (error: any) {
    handleHttpError(res, error.message, 400);
  };
};

// this controller is in charge of login user
export const loginController = async (req: Request, res: Response) => {
  try {
    const {email, password} = matchedData(req);
    const user = await models.usersModel.findOne({email: email});
    const hashedPassword = user.password;

    let message: string = '';

    if (!user) {
      message = 'Invalid password or email';
    } else {
      const isMatch = await comparePassword(password, hashedPassword);
      if (!isMatch) {
        message = 'Invalid password or email';
      };
    };
    user.set('password', undefined, {strict: false});
    if (message) {
      handleHttpError(res, message, 401);
    } else {
      res.status(200).json({
        status: 'OK',
        data: user,
        token: await tokenSign(user.id, user.role)
      });
    };
  } catch (error: any) {
    handleHttpError(res, error.message, 400)
  };
};