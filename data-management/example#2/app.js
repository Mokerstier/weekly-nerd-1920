const express = require('express')
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const config = {
    PORT: 3000
}

const app = express()

app
    .use(express.static('static'))
    .use(urlencodedParser)

    .set('view engine', 'ejs')

    .get('/', (req, res) =>{
        res.render("pages/form.ejs", {
            title: "Pagina bestaat niet"
        })
    })

app.listen(config.PORT, () => console.log(`http://localhost:${config.PORT}`))