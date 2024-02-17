const Item = require('../models/Item')

exports.getAllItems = async (req,res) => {
    const items = await Item.find()

    try {
        res.status(200).json({
            message: "success",
            data: items
        })
    } catch (err) {
        res.status(400).json({
            message: "failure",
            errorMessage: err
        })
    }
}


exports.addItem = async (req, res) => {
    try {
        const item = await Item.create(req.body)
        
        res.status(200).json({
            message: "success",
            data: "item created"
        })
    } catch (err) {
        res.status(400).json({
            message:"failure",
            errorMessage: err
        })
    }
}