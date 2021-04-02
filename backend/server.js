import express from 'express';
import path from 'path';
// import items from './data/items.js';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import itemRoutes from './routes/itemRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

app.use('/api/items', itemRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/frontend/build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('Server Running on port 3001');
  });
}

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
