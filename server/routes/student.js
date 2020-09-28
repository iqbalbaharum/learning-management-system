const Router = require('express').Router()
import studentController  from '../controller/student'

Router.route('/')
    .get(studentController.index)
    .post(studentController.newStudent)

Router.route('/delete/:id')
    .get(studentController.deleteStudent)

Router.route('/update')
    .post(studentController.updateStudent)

module.exports = Router
