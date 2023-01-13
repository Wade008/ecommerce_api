
const jwt = require("jsonwebtoken");

function auth(request, response, next) {
    //get the token from the authorization header
    let token = request.get("authorization") //bearer token format: `Bearer token`
    token = token?.split(" ")?.[1] // token ? check if token exists before splitting and the ? also checks if the second value exists before accessing the seconf value... ? called optional chaining. This will now return undefinded instead of an error if the the next level doesn't exist

    //check if token exists
    if (!token) {
        return response.status(401).json({
            data: "Unauthenticated"
        })
    }
    //verify the token using the secret key
    try {
        // successfully verifies, gives payload. not verified, throws error
        const payload = jwt.verify(token, "secretkey")

        request.userId = payload.id
        next() //go to the next middleware

    } catch (err) {
        console.log(err)
        return response.status(401).json({ data: "Unauthenticated" })
    }


    //put the payload(id) in the request for other functions to use
}

module.exports = auth