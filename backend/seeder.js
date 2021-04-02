import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import items from './data/items.js';
import menu from './data/menu.js';
import User from './models/userModel.js';
import Item from './models/itemModel.js';
import Menu from './models/menuModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async() => {
    try {
        await Order.deleteMany();
        await Item.deleteMany();
        await User.deleteMany();
        await Menu.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleItems = items.map((item) => {
            return {...item, user: adminUser };
        });

        const menuItems = menu.map((item) => {
            return {...item, user: adminUser };
        });

        await Item.insertMany(sampleItems);
        await Menu.insertMany(menuItems);

        console.log('Data Imported');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

const destroyData = async() => {
    try {
        await Order.deleteMany();
        await Item.deleteMany();
        await User.deleteMany();
        await Menu.deleteMany();

        console.log('Data Destroyed');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}