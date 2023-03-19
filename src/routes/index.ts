import express, { Router } from 'express';
import fs from 'fs';
import tracksRouter from './tracks';

const routers = [
  tracksRouter
]

const allRouters = Router();

const PATH_ROUTES = __dirname; // Nos da el path de la carpeta en la que se encuentra este archivo: /home/xhan/Desktop/node/dist/routes

const removeExtension = (fileName: string) => {
  return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); // users, storage, tracks
  if (name !== 'index') {
    allRouters.use(`/${name}`, routers); // http://localhost:3000/api/v1/${name}
  };
});


export default allRouters;
