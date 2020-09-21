const Router = require('express').Router()
import tutorialController  from '../controller/tutorial'

Router.route('/')
    .get(tutorialController.index)
    .post(tutorialController.newTutorial)

Router.route('/delete/:id')
    .get(tutorialController.deleteTutorial)

Router.route('/update')
    .post(tutorialController.updateTutorial)


module.exports = Router
