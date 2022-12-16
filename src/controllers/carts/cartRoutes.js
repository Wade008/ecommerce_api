const express = require("express");

const { getCarts, getCartById, getCartByUserId } = require("./cartControllers")

const cartRouter = express.Router();



cartRouter.get("/", (req, res) => {
    const carts = getCarts()
    res.json(carts)
})

cartRouter.get("/:cartId", (req, res) => {

    const cart = getCartById(req.params.cartId)
    if (!cart) {
        res.status(404).json({
            data: "Cart does not exist"
        })
    }
    res.json(cart)
})

cartRouter.get("/user/:userId", (request, response) => {
    const cart = getCartByUserId(request.params.userId)
    if (!cart) {
        response.status(404).json({
            data: "cart doesn't exist",
        })
    }
    response.json(cart)
})


module.exports = cartRouter;