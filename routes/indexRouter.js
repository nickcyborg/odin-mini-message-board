const {Router} = require('express')
const indexRouter = Router();
const messages = require('../data/messages.js')


indexRouter.get('/', (req, res) => {
    res.render("index", {title: "Mini Messageboard", messages: messages })
})


module.exports = indexRouter;