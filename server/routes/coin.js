const coincontroller = require('./../controllers/coin.ctrl')

module.exports = (router) => {

    /**
     * get a coin
     */
    router
        .route('/coin/:id')
        .get(coincontroller.getCoin) 
    /**
     * adds a coin
     */
    router
        .route('/coin')
        .post(coincontroller.addCoin)

    /**
     * list coins
     */
    router
        .route('/coins')
        .get(coincontroller.listCoins)

}