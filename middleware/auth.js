const jwt = require('jsonwebtoken')
const User = require('../models/users')
exports.isAuthenticated = (req, res, next) => {

    const token = req.headers['x-auth-token'];

    const {email} = jwt.verify(token, 'Token')

    User
        .findOne({email: email})
        .select('-password')
        .then((user) => {
            email

            if (!user) {

                return res
                    .status(401)
                    .json({msg: 'Unauthorized'})
            }
            next()

        })
}