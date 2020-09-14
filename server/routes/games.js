const Router = require('express').Router()
import gamesController  from '../controller/games'

Router.route('/')
    .get(gamesController.index)
    .post(gamesController.newGames)

Router.route('/delete/:id')
    .get(gamesController.deleteGames)

Router.route('/update')
    .post(gamesController.updateGames)

module.exports = Router