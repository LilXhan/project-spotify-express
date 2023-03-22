import { Router } from 'express';
import { validatorLogin, validatorRegister } from '../validators/auth';
import { registerController, loginController } from '../controllers/auth';

const authRouter = Router();

// http://localhost:3000/api/v1/auth/register
// http://localhost:3000/api/v1/auth/login

authRouter.post('/register', validatorRegister, registerController);
authRouter.post('/login', validatorLogin, loginController)

export default authRouter;