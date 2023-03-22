import { Request, Response } from 'express';
import models from "../models";
import { handleHttpError } from '../utils/handleError';
import { matchedData } from 'express-validator';
import fs from 'fs';
import path from 'path';

export const getItems = async (_: Request, res: Response) => {
  try {
    const items = await models.storageModel.find({});
    res.status(200).json({
      status: 'OK',
      data: items
    });
  } catch (error: any) {
    handleHttpError(res, error.message, 400);
  };
};

export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const item = await models.storageModel.findById(id);
    res.status(200).json({
      status: 'OK',
      data: item
    });
  } catch (error: any) {
    handleHttpError(res, error.message, 400);
  };
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const { file } = req;
    const fileData  = {
      filename: file?.filename,
      url: `${PUBLIC_URL}/${file?.filename}`
    };
    const item = new models.storageModel(fileData);
    await item.save();
    res.status(201).json({
      status: 'OK',
      data: item
    });
  } catch (error: any) {
    handleHttpError(res, error.message, 400)
  };
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id, ...body } = matchedData(req);
    const item = await models.storageModel.findByIdAndUpdate(id, body);
    res.status(200).json({
      status: 'OK',
      data: item
    });
  } catch (error: any) {
    handleHttpError(res, error.message, 400);
  };
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const item = await models.storageModel.findByIdAndDelete(id);
    const { filename } = item!;
    fs.unlinkSync(path.join(__dirname, `../storage/${filename}`))
    res.status(200).json({
      status: 'OK',
      data: item
    });
  } catch (error: any) {
    handleHttpError(res, error.message, 400);
  };
};