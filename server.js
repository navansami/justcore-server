const server = require("./config/app")
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;

connectDB()

server.listen(PORT, () => {
    console.log(`===============\n`)
    console.log(`Server Started`)
    console.log(`Port: ${PORT}`)
    console.log(`\n===============`)
})