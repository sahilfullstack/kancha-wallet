/** */
const Transaction = require('./../models/Transaction')

module.exports = {
    addTransaction: (req, res, next) => {
        new Transaction(req.body).save((err, newTransaction) => {
            if (err)
                res.send(err)
            else if (!newTransaction)
                res.send(400)
            else
                res.send(newTransaction)
            next()
        });
    },
    getTransaction: (req, res, next) => {
        Transaction.find({'wallet_id':req.params.wallet_id, '_id': req.params.id}).then((err, Transaction)=> {
            if (err)
                res.send(err)
            else if (!Transaction)
                res.send(404)
            else
                res.send(Transaction)
            next()            
        })
    },
    listTransaction: (req, res, next) => {
        Transaction.find({'wallet_id':req.params.wallet_id}).then((err, Transaction)=> {
            if (err)
                res.send(err)
            else if (!Transaction)
                res.send(404)
            else
                res.send(Transaction)
            next()            
        })
    }
}