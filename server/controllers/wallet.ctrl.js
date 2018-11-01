/** */
const Wallet = require('./../models/Wallet')

module.exports = {
    addWallet: (req, res, next) => {
        new Wallet(req.body).save((err, newWallet) => {
            if (err)
                res.send(err)
            else if (!newWallet)
                res.send(400)
            else
                res.send(newWallet)
            next()
        });
    },
    getWallet: (req, res, next) => {
        Wallet.find({'user_id':req.params.user_id, '_id': req.params.id}).then((err, Wallet)=> {
            if (err)
                res.send(err)
            else if (!Wallet)
                res.send(404)
            else
                res.send(Wallet)
            next()            
        })
    },
    listWallet: (req, res, next) => {
        Wallet.find({'user_id':req.params.user_id}).then((err, Wallet)=> {
            if (err)
                res.send(err)
            else if (!Wallet)
                res.send(404)
            else
                res.send(Wallet)
            next()            
        })
    },
    getAmountLeft: (req, res, next) => {
        Wallet.find({'user_id':req.params.user_id, '_id': req.params.id}).then((err, Wallet)=> {
            if (err)
                res.send(err)
            else if (!Wallet)
                res.send(404)
            else
                res.send(Wallet)
            next()            
        })
    }
}