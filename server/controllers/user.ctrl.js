/** */
const User = require('./../models/User')

module.exports = {
    addUser: (req, res, next) => {
        new User(req.body).save((err, newUser) => {
            if (err)
                res.send(err)
            else if (!newUser)
                res.send(400)
            else
                res.send(newUser)
            next()
        });
    },
    getUser: (req, res, next) => {
        User.findById(req.params.id).then
        /*populate('following').exec*/((err, user)=> {
            if (err)
                res.send(err)
            else if (!user)
                res.send(404)
            else
                res.send(user)
            next()            
        })
    }
}