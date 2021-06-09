import express from 'express';
import path from 'path';

import Routes from './Routes';
const app = express();

app.use(express.json());
app.use(Routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333, () => console.log('Server runing in port 3333.'));