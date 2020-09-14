// Yesterday
const Router = require('express').Router()
import journalController  from '../controller/journal'

/* - put: update
   - get: dapatkan data
   - get post: buat baru */
Router.route('/')
    .get(journalController.index)
    .post(journalController.newJournal)

/* delete boleh pakai kat api je dalam browser tak boleh pakai */
/* 'put' boleh pakai kat browser */
Router.route('/delete/:id')
    .get(journalController.deleteJournal)

/* 1st Step buat route dulu */
/* Kalau nak jadikan dia parameter, kita kena double dot */
/* Baca HTTP Request */
Router.route('/update')
    .post(journalController.updateJournal) 

module.exports = Router