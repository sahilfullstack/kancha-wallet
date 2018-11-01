const mongoose = require('mongoose')

let TransactionSchema = new mongoose.Schema(
    {
		wallet_id   : String,
		transaction_hash: String,
		sender: String,
		reciever : String,
		amount: String,
		meta: Object        
    }
)

module.exports = mongoose.model('Transaction', TransactionSchema)