const {Router} = require('express')
const newRouter = Router()
const messages = require('../data/messages.js')

newRouter.get('/', (req, res) => {
    res.render("form")
})

newRouter.post('/', (req, res) => {
    const {text, user} = req.body
    messages.unshift({
        text: text, 
        user: user, 
        added: new Date().toLocaleDateString(),
        id: messages.length
    })  
    res.redirect("/")
})

module.exports = newRouter;