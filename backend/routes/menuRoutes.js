import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Menu from '../models/menuModel.js';

router.get(
    '/',
    asyncHandler(async(req, res) => {
        const menu = await Menu.find({});
        res.json(menu);
    })
);

export default router;