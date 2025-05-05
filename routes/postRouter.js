const {Router} = require('express')

const postRouter = Router();

postRouter.get("/new", (req, res) => {
    console.log("message posted")
})


module.exports = postRouter