import { Router } from 'express';
import { getItems, getItem, createItem } from '../controllers/tracks';
import { validatorCreateItem, validatorGetItem} from '../validators/tracks';

const tracksRouter = Router();

// Rute http://localhost/tracks GET, POST, DELETE, PUT, RETRIEVE

tracksRouter.get('/', getItems);
tracksRouter.get('/:id', validatorGetItem, getItem);
tracksRouter.post('/', validatorCreateItem, createItem);

export default tracksRouter;