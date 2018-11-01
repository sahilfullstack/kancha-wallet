const walletcontroller = require('./../controllers/wallet.ctrl')

module.exports = (router) => {

    /**
     * get a wallet
     */
    router
        .route('/user/:user_id/wallet/:wallet_id')
        .get(walletcontroller.getWallet) 
    /**
     * adds a wallet
     */
    router
        .route('/user/:user_id/wallet')
        .post(walletcontroller.addWallet)

    /**
     * list wallets
     */
    router
        .route('/user/:user_id/wallet')
        .get(walletcontroller.listWallet)    

    /**
     * get wallet amount left
     */
    router
        .route('/user/:user_id/wallet/:id/amount')
        .get(walletcontroller.getAmountLeft)

}