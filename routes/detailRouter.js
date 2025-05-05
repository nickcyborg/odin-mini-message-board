const {Router} = require('express')
const detailRouter = Router()
const messages = require('../data/messages.js')


detailRouter.get('/:id', (req, res) => {
    const {id} = req.params
    const message = messages.filter((item) =>  {  
        return id.toString() === item.id.toString()
    })
    if (!message[0]) {
        return res.render("error")
    }
    res.render("message", {message: message[0]})
})


module.exports = detailRouter