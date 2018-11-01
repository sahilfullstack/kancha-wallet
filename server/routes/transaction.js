const transactioncontroller = require('./../controllers/transaction.ctrl')

module.exports = (router) => {

    /**
     * get a transaction
     */
    router
        .route('/wallet/:wallet_id/transaction/:id')
        .get(transactioncontroller.getTransaction) 
    /**
     * adds a transaction
     */
    router
        .route('/wallet/:wallet_id/transaction')
        .post(transactioncontroller.addTransaction)

    /**
     * list transactions
     */
    router
        .route('/wallet/:wallet_id/transaction')
        .get(transactioncontroller.listTransaction)
}