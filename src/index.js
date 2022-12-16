
const express = require("express");

const productRouter = require("./controllers/products/productRoutes")

const cartRouter = require("./controllers/carts/cartRoutes")

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


// Listener
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})



