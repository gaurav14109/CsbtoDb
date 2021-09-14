const User = require('../models/users');
const crypto = require('crypto');
const jwt = require('jsonwebtoken')
exports.registration = async (req, res) => {

    try {
        const checkuser = await User.find({email: req.body.email})
        if (checkuser.length > 0) {

            return res.json([
                {
                    errors: 'User Already Exists Kindly use different Email Id'
                }
            ])
        }
        const hashedPassword = crypto
            .createHash('sha256', 'passowrdsecret')
            .update(req.body.password)
            .digest('hex')
        let user = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword

        }
        const token = jwt.sign({
            name: user.name,
            email: user.email
        }, 'Token')
        res.cookie('token', token, {
            expires: new Date(Date.now() + 900000)
        })
        await User.create(user)

        res.json({msg: 'User Created Successfully', token: token})

    } catch (err) {
        console.log(err)
    }

}

exports.login = (req, res) => {

    User
        .findOne({email: req.body.email})
        .then(user => {

            if (!user) {
                return res
                    .status(401)
                    .json({msg: 'Unauthorized'})
            }
            const hashedPassword = crypto
                .createHash('sha256', 'passowrdsecret')
                .update(req.body.password)
                .digest('hex')
            
            if (hashedPassword === user.password) {
                const token = jwt.sign({
                    name: user.name,
                    email: user.email
                }, 'Token')
                res.cookie('token', token, {
                    expires: new Date(Date.now() + 900000)
                })

                res.json({msg: 'User Created Successfully', token: token})
            }else{
                return res
                .status(401)
                .json({msg: 'Password does not match'})
            }
        })
}