const { response } = require("express");
const express = require("express");

const { getProducts, getProductById, createProduct} = require("./productControllers")

const productRouter = express.Router();



productRouter.get("/", (req, res) => {
    const products = getProducts()
    res.json(products)
})

productRouter.get("/:productId", (req, res) => {

    const product = getProductById(req.params.productId)
    if (!product) {
        res.status(404).json({
            data: "Product does not exist"
        })
    }
    res.json(product)
})

productRouter.post("/", (req,res) => {
    const product = createProduct({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock
    })
    res.json(product)
})




module.exports = productRouter;