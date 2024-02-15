const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [6, "title must be at least 6 characters long"]
    },
    price: {
        type: Number,
        required: [true, "price is required"],
    },
    description: {
        type: String,
    },
});
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;
