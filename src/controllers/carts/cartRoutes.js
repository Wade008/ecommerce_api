const express = require("express");

const { getCarts, getCartById, getCartByUserId,    getCartByUserIdWithProductInfo } = require("./cartControllers")

const cartRouter = express.Router();



cartRouter.get("/", async (req, res) => {
    const carts = await getCarts()
    res.json(carts)
})

cartRouter.get("/:cartId", async (req, res) => {

    const cart = await getCartById(req.params.cartId)
    if (!cart) {
        res.status(404).json({
            data: "Cart does not exist"
        })
    }
    res.json(cart)
})

// /carts/user/userId?getProductInfo=true
cartRouter.get("/user/:userId", async (request, response) => {
    let cart
    if (request.query.getProductInfo) {
        cart = await getCartByUserIdWithProductInfo(request.params.userId)
    } else {
        cart = await getCartByUserId(request.params.userId)
    }
    if (!cart) {
        response.status(404).json({
            data: "cart doesn't exist",
        })
    }
    response.json(cart)
})

module.exports = cartRouter;