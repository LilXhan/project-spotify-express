import { Router } from 'express';
import { getItems, getItem, createItem, updateItem, deleteItem } from '../controllers/tracks';
import { validatorCreateItem, validatorGetId, validatorUpdateItem } from '../validators/tracks';

const tracksRouter = Router();

// Rute http://localhost/tracks GET, POST, DELETE, PUT, RETRIEVE

tracksRouter.get('/', getItems);
tracksRouter.get('/:id', validatorGetId, getItem);
tracksRouter.post('/', validatorCreateItem, createItem);
tracksRouter.put('/:id', validatorUpdateItem, updateItem);
tracksRouter.delete('/:id', validatorGetId, deleteItem);

export default tracksRouter;