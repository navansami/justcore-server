const User = require("../models/User")
const bcrypt = require('bcrypt')
const tokenManager = require('../utilities/tokenManager')
const cookieManager = require('../utilities/cookieManager')


const dotenv = require('dotenv').config()

exports.Register = async (req, res) => {

    try {
        // check if user exist in database
        const existingUser = await User.find({ email: req.body.email })

        if(!existingUser.length) {
            // create user if not found
            const hashedPwd = await bcrypt.hash(req.body.password,10)
            const newuser = await User.create({
                ...req.body, password: hashedPwd
            })
        } else {
            console.log(`User: '${req.body.email}' already exists, please login instead`)
            throw new Error(`User: '${req.bodys.email}' already exists, please login instead`)
        }

        res.status(201).json({
            message: "success",
            data: req.body.email
        })

    } catch (err) {
        res.status(400).json({
            message: "fail",
            error: err.message
        })
    }
}


exports.Login = async (req, res) => {
    
    try {
        const {password, email} = req.body
        // find existing user by email
        const existingUser = await User.find({ email })

        // if existing user is found, compare passwords
        if( existingUser.length ) {
            const validatePwd = await bcrypt.compare(password, existingUser[0].password)
        
            if(!validatePwd) {
                console.log(`Incorrect Password entered`)
                throw new Error(`Incorrect Password entered`)        
            }
            
            cookieManager.setCookie(
                req, res, "token", 
                tokenManager.createToken({
                    username: req.body.email
                })
            )

        } else {
            console.log(`User: '${tmpuser.email}' does not exists, please register instead`)
            throw new Error(`User: '${tmpuser.email}' does not exists, please register instead`)
        }

        res.status(201).json({
            message: "success",
            data: `${req.body.email} logged in`
        })
    } catch (err) {
        res.status(400).json({
            message: "fail",
            error: err.message
        })
    }
}