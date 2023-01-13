const { response } = require("express");
const express = require("express");

const { getProducts, getProductById, createProduct, deleteProduct} = require("./productFunctions")

const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");


const productRouter = express.Router();



productRouter.get("/", async (req, res) => {
    const products = await getProducts()
    return res.json(products)
})

productRouter.get("/:productId", async (req, res) => {

    const product = await getProductById(req.params.productId)
    if (!product) {
        res.status(404).json({
            data: "Product does not exist"
        })
    }
    return res.json(product)
})

productRouter.post("/", auth, async (req,res) => {
    console.log(request.userId)
    const product = await createProduct({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock
    })
    return res.json(product)
})

productRouter.delete("/:productId", auth, admin,  async (req, res) => {
    const product = await deleteProduct(req.params.productId)
    return res.json(product)
})





module.exports = productRouter;