import Model from '../models'

export default {

    async index(req, res) {
			
			let subjects = []
			try {
				subjects = await Model.Subject.findAll()
			} catch(e) {
				console.log(e)
			}
			
			res.render('subject', {
				session: req.session,
				subjects: subjects
			})
    },

    async newSubject(req, res) {
			await Model.Subject.create({
				name: req.body.name,
			})

			res.redirect('/subject')
		},
}