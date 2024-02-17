const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const dbOptions = {}
const mongouri = process.env.DBURI
    .replace('<user>', process.env.DBUSER)
    .replace('<password>',process.env.DBPWD)

    
const dbConnect = async () => {
    await mongoose.connect(mongouri, dbOptions)
        .then(() => console.log(`database connection established`))
        .catch(err => console.error(err))
}

module.exports = dbConnect