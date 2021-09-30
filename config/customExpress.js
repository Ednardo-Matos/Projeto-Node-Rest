const express = require('express')//exprortar o express
const consign = require('consign')//exprortar o o consign
const bodyParser = require('body-parser')


//exporta a função
module.exports = () => {

    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //atribuir as rotas ao app
    consign()
        .include('controllers')
        .into(app)

    return app
}


