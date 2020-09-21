const Router = require('express').Router()
import tagController  from '../controller/tag'
import tutorialController  from '../controller/tutorial'

Router.route('/')
    .get(tagController.index)
    .post(tagController.newTag)

Router.route('/delete/:id')
    .get(tagController.deleteTag)

Router.route('/update')
    .post(tagController.updateTag)

module.exports = Router
