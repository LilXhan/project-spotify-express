import { Request, Response } from 'express';
import models from "../models";



export const createItem = async (req: Request, res: Response) => {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  const { file } = req;
  const fileData  = {
    filename: file?.filename,
    url: `${PUBLIC_URL}/${file?.filename}`
  }

  const data = new models.storageModel(fileData);
  await data.save();

  res.send(data);
};