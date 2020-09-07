const Router = require('express').Router()

Router.route('/')
    .get((req, res) => {
        res.render('index')
    })

module.exports = Router