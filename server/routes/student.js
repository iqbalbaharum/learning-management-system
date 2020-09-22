const Router = require('express').Router()
import studentController  from '../controller/student'

Router.route('/')
    .get(studentController.index)
    .post(studentController.newStudent)

Router.route('/assign')
    .post(studentController.assignStudentToSubject)

module.exports = Router