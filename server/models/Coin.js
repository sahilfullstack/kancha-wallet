const mongoose = require('mongoose')

let CoinSchema = new mongoose.Schema(
    {
        name: String,
        symbol: String        
    }
)

module.exports = mongoose.model('Coin', CoinSchema)