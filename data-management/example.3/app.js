const express = require('express')
const routes = express.Router()
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");

const config = {
    PORT: 3000
}

const app = express()

app
    .use(express.static('static'))
    .use(bodyParser.json())
    .use(urlencodedParser)
    .use('/', routes)

    .set('view engine', 'ejs')
;

routes 
    // the route to homepage
    .get('/', (req, res) =>{ 
        res.render("pages/home.ejs", {
            title: "Store data to database",
        })
    })      
;
