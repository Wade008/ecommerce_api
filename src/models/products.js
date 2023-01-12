const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    user_id: String,
    description:String
})

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    stock: Number,
    reviews: [ReviewSchema]
})

const Product = mongoose.model("product", ProductSchema);

module.exports = Product