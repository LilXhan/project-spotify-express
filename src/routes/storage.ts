import { Router } from 'express';
import uploadMiddleware from '../utils/handleStorage';
import { createItem, getItems, getItem, deleteItem } from '../controllers/storage';
import { validatorGetId } from '../validators/storage';

const storageRouter = Router();

// http://localhost:3000/storage

// upload multi archivos -> middleware.multi()

storageRouter.get('/', getItems);
storageRouter.get('/:id', validatorGetId, getItem);
storageRouter.post('/', uploadMiddleware.single('myfile'), createItem);
storageRouter.delete('/:id', validatorGetId, deleteItem);

export default storageRouter;