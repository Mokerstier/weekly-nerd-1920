const express = require('express')
const routes = express.Router()
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const setJSON = require('./controllers/setJSON')

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

    // the route required for the POST request this is the route you post to with your form
    .post('/form', setJSON.writeData, (req, res) =>{ // we call the middleware function, writeData, where we extract our form post
        let data = res.locals.users 
        // This is the unsaved data made available from the writeData function that lives in: 'controllers/setJSON.js'
        // we will serve the user a list of all users in the data.json
        res.render('pages/userlist.ejs', {
            users: data.users, // The data is now available on the userlist.ejs
            title: "A list of users"
        })
    })

    // the route to homepage
    .get('/', (req, res) =>{ 
        res.render("pages/form.ejs", {
            title: "Store data to server",
        })
    })      

;

app.listen(config.PORT, () => console.log(`Server running on: http://localhost:${config.PORT}`))