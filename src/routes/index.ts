import { Router } from 'express';
import fs from 'fs';
import storageRouter from './storage';
import tracksRouter from './tracks';
import authRouter from './auth';

interface RouterMap {
  [key: string]: Router;
}

const routers: RouterMap = {
  tracksRouter,
  storageRouter,
  authRouter
}

const allRouters = Router();

const PATH_ROUTES = __dirname; // Nos da el path de la carpeta en la que se encuentra este archivo: /home/xhan/Desktop/node/dist/routes

const removeExtension = (fileName: string) => {
  return fileName.split('.').shift();
};


fs.readdir(PATH_ROUTES, (_, files) => {
  files.filter((file) => {
    const name = removeExtension(file); // users, storage, tracks
    if (name !== 'index') {
      allRouters.use(`/${name}`, routers[`${name}Router`]);
    };
  })
});


export default allRouters;
