const jwt = require('jsonwebtoken')

exports.createToken = async (payload) => {
    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '1d'})
    return token
}