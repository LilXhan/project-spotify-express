import { Router } from 'express';
import { getItems, getItem, createItem, updateItem, deleteItem } from '../controllers/tracks';
import { validatorCreateItem, validatorGetId, validatorUpdateItem } from '../validators/tracks';
import authMiddleware from '../middlewares/session';
import checkRol from '../middlewares/rol';

const tracksRouter = Router();

// Rute http://localhost/tracks GET, POST, DELETE, PUT, RETRIEVE

tracksRouter.get('/', authMiddleware, checkRol(['admin']), getItems);
tracksRouter.get('/:id', authMiddleware, validatorGetId, getItem);
tracksRouter.post('/', authMiddleware, validatorCreateItem, createItem);
tracksRouter.put('/:id', authMiddleware, validatorUpdateItem, updateItem);
tracksRouter.delete('/:id', authMiddleware, validatorGetId, deleteItem);

export default tracksRouter;