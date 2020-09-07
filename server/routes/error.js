const Router = require('express').Router()

Router.route('/')
    .get((req, res) => {
        res.render('error')
    })

module.exports = Router