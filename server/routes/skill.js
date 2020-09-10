const Router = require('express').Router()
import skillController  from '../controller/skill'

Router.route('/')
    .get(skillController.index)
    .post(skillController.newSkill)

Router.route('/delete/:id')
    .get(skillController.deleteSkill)

module.exports = Router