const { response } = require("express");
const express = require("express");

const { getProducts, getProductById, createProduct} = require("./productControllers")

const productRouter = express.Router();



productRouter.get("/", async (req, res) => {
    const products = await getProducts()
    res.json(products)
})

productRouter.get("/:productId", async (req, res) => {

    const product = await getProductById(req.params.productId)
    if (!product) {
        res.status(404).json({
            data: "Product does not exist"
        })
    }
    res.json(product)
})

productRouter.post("/", async (req,res) => {
    const product = await createProduct({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock
    })
    res.json(product)
})




module.exports = productRouter;