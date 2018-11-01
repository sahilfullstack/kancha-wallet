/** */
const Coin = require('./../models/Coin')

module.exports = {
    addCoin: (req, res, next) => {
        new Coin(req.body).save((err, newCoin) => {
            if (err)
                res.send(err)
            else if (!newCoin)
                res.send(400)
            else
                res.send(newCoin)
            next()
        });
    },
    getCoin: (req, res, next) => {
        Coin.findById(req.params.id).then
        /*populate('following').exec*/((err, Coin)=> {
            if (err)
                res.send(err)
            else if (!Coin)
                res.send(404)
            else
                res.send(Coin)
            next()            
        })
    },
    listCoins: (req, res, next) => {
        Coin.find().then((err, Coin)=> {
            if (err)
                res.send(err)
            else if (!Coin)
                res.send(404)
            else
                res.send(Coin)
            next()            
        })
    }
}