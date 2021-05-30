const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split("")[1] || ""
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.verifiedUser = verified
        console.log("Verification success!", verified)
    } catch (error) {
        console.log("Verification failed")
    }
}

module.exports = {authenticate}