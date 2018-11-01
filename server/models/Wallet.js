const mongoose = require('mongoose')

let WalletSchema = new mongoose.Schema(
    {
		name   : String,
		coin_id: String,
		user_id: String,
		mnemonic : String,
		address: String,
		meta: Object        
    }
)

module.exports = mongoose.model('Wallet', WalletSchema)