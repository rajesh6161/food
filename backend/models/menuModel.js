import mongoose from 'mongoose';

const menuSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    dish: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;