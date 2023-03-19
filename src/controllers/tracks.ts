import { Request, Response } from 'express';
import  models from '../models';

export const getItems = async (req: Request, res: Response) => {
  const data = await models.tracksModel.find({});
  res.send(data);
};

export const getItem = (req: Request, res: Response) => {

};

export const createItem = (req: Request, res: Response) => {

};

export const updateItem = (req: Request, res: Response) => {

};

export const deleteItem = (req: Request, res: Response) => {

};

