import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import dbConnect from './config/mongo';
import allRouters from './routes/';
import path from 'path';

const app = express();

config();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'storage')));
app.use('/api/v1', allRouters);


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Your app is ready by port: http://localhost:${port}`);
});

dbConnect()
  .then(() => console.log('Connection success'))
  .catch(() => console.log('Connection refused'));
