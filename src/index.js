
const express = require("express");
const mongoose = require("mongoose");

const productRouter = require("./controllers/products/productRoutes")
const cartRouter = require("./controllers/carts/cartRoutes")
const userRouter = require("./controllers/users/userRoutes")


const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {

    res.json({
        data: "Data sent"
    })
})

//flows from index -> to routes -> to controllers
app.use("/products", productRouter)
app.use("/carts", cartRouter)
app.use("/users", userRouter)


// Listener
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
    mongoose.set("strictQuery", false)
    mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", () => {
        console.log("Database connected")
    })
})



