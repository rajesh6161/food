import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Item from '../models/itemModel.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const items = await Item.find({});
    res.json(items);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);

    if (item) {
      res.json(item);
    } else {
      res.status(404);
      throw new Error('Item not found!');
    }
  })
);

export default router;
