
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const Admin = require("../../models/admin");



async function registerUser(user) {

    // step 1 check if exists first
    const existingUser = await User.findOne({
        username: user.username
    })

    if (existingUser) {
        return { error: "Username already exists" }
    }
    // step 2 hash the password
    const hashedPassword = await bcrypt.hash(user.password, 10)

    // step 3 create the user
    const userCreated = await User.create({
        name: user.name,
        username: user.username,
        password: hashedPassword
    })

    // 4 create token

    const payload = {
        id: userCreated._id
    }
    // secret key will go in .env later
    const token = jwt.sign(payload, "secretkey")
    return token

}


async function loginUser(user) {
    //check if user exists
    const existingUser = await User.findOne({
        username: user.username
    })
    if (!existingUser ) {
        return { error: "username or password is incorrect" }
    }
    //if exists match password
    const isMatch = await bcrypt.compare(user.password, existingUser.password)
    if (!isMatch) {
        return { error: "username or passsword is incorrect" }
    }
    //create token
    const payload = {
        id: existingUser._id
    }
    //return token
    const token = jwt.sign(payload, "secretkey")

    return token


}

async function loginAdmin(user) {
     //check if user exists
     const existingUser = await Admin.findOne({
        username: user.username
    })
    if (!existingUser ) {
        return { error: "username or password is incorrect" }
    }
    //if exists match password
    const isMatch = await bcrypt.compare(user.password, existingUser.password)
    if (!isMatch) {
        return { error: "username or passsword is incorrect" }
    }
    //create token
    const payload = {
        id: existingUser._id,
        is_admin: true,
    }
    //return token
    const token = jwt.sign(payload, "secretkey")

    return token


}


module.exports = {
    registerUser,
    loginUser,
    loginAdmin,
}