import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import dbConnect from './config/mongo';
import allRouters from './routes/';

const app = express();

config();
app.use(cors());
app.use('/api/v1', allRouters);


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Your app is ready by port: http://localhost:${port}`);
});

dbConnect()
.then(() => console.log('Connection success'))
.catch(() => console.log('Connection refused'));
