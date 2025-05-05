const express = require('express')
const app = express();

const path = require("node:path")

const PORT = 3000;

const postRouter = require('./routes/postRouter')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))


const messages = [
    {
      text: "Hi there!",
      user: "Amanda",
      added: new Date().toLocaleDateString(),
      id: 1
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date().toLocaleDateString(),
      id: 2
    }
  ];

let messageID = messages.length + 1

app.get('/', (req, res) => {
    res.render("index", {title: "Mini Messageboard", messages: messages })
})

app.get('/new', (req, res) => {
    res.render("form")
})

app.get('/messages/:id', (req, res) => {
    const {id} = req.params
    const message = messages.filter((item) =>  {  
        return id.toString() == item.id.toString()
    })
    res.render("message", {message: message[0]})
})

app.post('/new', (req, res) => {
    const {text, user} = req.body
    messages.unshift({
        text: text, 
        user: user, 
        added: new Date().toLocaleDateString(),
        id: messageID
    })
    messageID += 1  
    res.redirect("/")
})

app.listen(PORT, console.log(`Port is running on port: 3000`))