const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization 

    if(!authHeader){
        return res.status(401).json({
            message: 'Not Authorized'
        })
    }

    const data = jwt.verify(authHeader ,process.env.JWT_SECRET)

    // get user 
    console.log(data)
    // req.user = user
    next()
}

module.exports =  authMiddleware;