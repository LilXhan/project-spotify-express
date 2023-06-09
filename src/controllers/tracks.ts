import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import  models from '../models';
import { handleHttpError } from '../utils/handleError';


// Listar todos los registros
export const getItems = async (req: Request, res: Response) => {
  try {
    const data: Array<{}> = await models.tracksModel.find({});
    res.send({data});
  } catch (error: any) {
    handleHttpError(res, error.message, 403)
  }
};

// Detalle de un registro
export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const data = await models.tracksModel.findById(id);
    res.status(200).json({
      status: 'OK',
      data: data
    });    
  } catch (error: any) {
    handleHttpError(res, error.message, 400)
  }
};

// Crear un registro
export const createItem = async (req: Request, res: Response) => {
  try {
    const body = matchedData(req);
    const item = new models.tracksModel(body);
    await item.save();
    res.status(201).json({
      status: 'OK',
      data: item
    });
  } catch (error: any) {
    handleHttpError(res, error.message, 400)
  }
};

// Actualizar un registro
export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id, ...body } = matchedData(req); // ...body -> get rest propierties
    const item = await models.tracksModel.findByIdAndUpdate(id, body);
    res.status(200).json({
      status: 'OK',
      data: item
    });
  } catch (error: any) {
    handleHttpError(res, error.message, 400)
  }
};

// Eliminar un registro
export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const item = await models.tracksModel.findByIdAndDelete(id);
    res.status(200).json({
      status: 'OK',
      data: item
    });
  } catch (error: any) {
    handleHttpError(res, error.message, 400);
  }
};

