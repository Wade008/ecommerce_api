const express = require("express");


const { registerUser, loginUser, loginAdmin } = require("./userFunctions")


const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    const token = await registerUser({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    })
    if (token.error) {
        return res.status(404).json({ data: token.error })
    }
    return res.json(token);
})


userRouter.post("/login", async (request, response) => {
    const token = await loginUser({
        username: request.body.username,
        password: request.body.password
    })
    return response.json(token)
})


userRouter.post("/admin/login", async (request, response) => {
    const token = await loginAdmin({
        username: request.body.username,
        password: request.body.password,
    })
    return response.json(token)
})

module.exports = userRouter