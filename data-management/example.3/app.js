const express = require('express')
const routes = express.Router()
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const cookieParser = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")
const mongoose = require("mongoose")

const user = require("./controllers/user") // Here we will handle our new registers

const config = {
    PORT: 3000
}

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
}

require("dotenv").config()
const app = express()

const uri = process.env.MONGODB_URI

mongoose.connect(uri, options)
mongoose.connection.on("open", function (err, doc) {
  console.log(`connection established with ${process.env.DB_NAME}-Database`)
  if (err) throw err
})

app
    .use(express.static('static'))
    .use(bodyParser.json())
    .use(urlencodedParser)
    .use(passport.initialize())
    .use(passport.session())
    .use(cookieParser())
    
    .use("/register", user) // our special route for registering!
    .use('/', routes)
    
    .set('view engine', 'ejs')


routes 
    // the route to homepage
    .get('/', (req, res) =>{ 
        res.render("pages/home.ejs", {
            title: "Store data to database",
        })
    })      


app.listen(config.PORT, () => console.log(`Server running on: http://localhost:${config.PORT}`))