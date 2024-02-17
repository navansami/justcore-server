const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const cookies = require('cookie-parser')

const app = express()

// Routers
const authRouter = require('../routes/auth')
const inventoryRouter = require('../routes/inventory')

// Custom Middleware
const gateKeeper = require('../middleware/verifytoken')

// Middleware
app.use(cookies())
app.use(cors("*"))
app.use(morgan("dev"))
app.use(express.json())

// Routes
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        data: "token access"
    })
})
app.use('/api/v1/auth/', authRouter)
app.use('/api/v1/inventory/', gateKeeper, inventoryRouter)

module.exports = app;