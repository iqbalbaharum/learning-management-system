
const Router = require('express').Router()
import studentController  from '../controller/student'

/* - put: update
   - get: dapatkan data
   - get post: buat baru */
Router.route('/')
    .get(studentController.index)
    .post(studentController.newStudent)

Router.route('/assign')
    .post(studentController.assignStudentToSubject)

module.exports = Router
