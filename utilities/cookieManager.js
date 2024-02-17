
exports.setCookie = (req ,res, cookieName, cookieValue) => {
    res.cookie(cookieName, cookieValue)
}

exports.getCookie = (req, res, cookieName) => {
    return `${req.cookies}.${cookieName}`
}