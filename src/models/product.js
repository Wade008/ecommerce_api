const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    user_id: String,
    description: String
})

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
    },
    description: {
        type: String,
        validate: { //used for custom validation
            validator: (value) => {
                //supose description cannot contain word : "Hello"
                return !value.includes("hello")
            },
            message: "Description cannot contain word : Hello the word 'hello'",
        }
    },
    price: {
        type: Number,
        required: true,
        min: [0, "No negative price values"]
    },
    stock: Number,
    reviews: [ReviewSchema]
})

const Product = mongoose.model("product", ProductSchema);

module.exports = Product