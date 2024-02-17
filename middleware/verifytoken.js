const jwt = require('jsonwebtoken')

const verify = async (req, res, next) => {
    const token = req.cookies.token
    try {
        const legit = await jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(!legit) {
            throw new Error("Authorization Error")
        }
        next()
    } catch (error) {
        res.status(400).json({
            message: "failure",
            errorDetails: error
        })
    }
        
}

module.exports = verify