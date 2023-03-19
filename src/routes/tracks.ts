import express, { Router } from 'express';
import { getItems, getItem } from '../controllers/tracks';

const tracksRouter = Router();

// Rute http://localhost/tracks GET, POST, DELETE, PUT, RETRIEVE

tracksRouter.get('/', getItems);
tracksRouter.get('/:id', getItem);


export default tracksRouter;