
const Router = require('express').Router()
import subjectController  from '../controller/subject'

/* - put: update
   - get: dapatkan data
   - get post: buat baru */
Router.route('/')
    .get(subjectController.index)
    .post(subjectController.newSubject)

module.exports = Router