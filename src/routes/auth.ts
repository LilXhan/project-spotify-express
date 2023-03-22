import { Router } from 'express';
import { validatorLogin, validatorRegister } from '../validators/auth';
import { matchedData } from 'express-validator';
import { encryptPassword } from '../utils/handleHashPassword';
import models from '../models';
import { tokenSign } from '../utils/handleJwt';

const authRouter = Router();

// http://localhost:3000/api/v1/auth/register
// http://localhost:3000/api/v1/auth/login

authRouter.post('/register', validatorRegister, async (req, res) => {
  req = matchedData(req);
  const { password } = req;
  const hashedPassword = await encryptPassword(password);
  const body = { ...req, password: hashedPassword };
  const dataUser = await models.usersModel.create(body);
  dataUser.set('password', undefined, {strict: false});

  res.status(201).json({
    status: 'OK',
    data: dataUser,
    token: await tokenSign(dataUser.id, dataUser.role)
  });
});

export default authRouter;