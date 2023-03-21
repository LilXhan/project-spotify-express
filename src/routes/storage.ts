import { Router } from 'express';
import uploadMiddleware from '../utils/handleStorage';
import { createItem } from '../controllers/storage';

const storageRouter = Router();

// http://localhost:3000/storage

// upload multi archivos -> middleware.multi()

storageRouter.post('/', uploadMiddleware.single('myfile'), createItem);

export default storageRouter;