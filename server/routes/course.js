const Router = require('express').Router()
import courseController  from '../controller/course'

Router.route('/')
    .get(courseController.index)
    .post(courseController.newCourse)

Router.route('/delete/:id')
    .get(courseController.deleteCourse)

Router.route('/update')
    .post(courseController.updateCourse)

module.exports = Router