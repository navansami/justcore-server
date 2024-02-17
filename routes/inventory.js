const router = require('express').Router()
const inventoryCtlr = require('../controllers/inventoryController')

router
    .route('/')
    .get(inventoryCtlr.getAllItems)
    .post(() => console.log(`route not yet defined`))

router
    .route('/:id')
    .get(() => console.log(`route not yet defined`))
    .put(() => console.log(`route not yet defined`))
    .delete(() => console.log(`route not yet defined`))

module.exports = router