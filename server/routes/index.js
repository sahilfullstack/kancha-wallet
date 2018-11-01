const user        = require('./user')
const coin        = require('./coin')
const wallet      = require('./wallet')
const transaction = require('./transaction')

module.exports = (router) => {
    coin(router)
    user(router)
    wallet(router)
    transaction(router)
}