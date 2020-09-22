
import Model from '../models'

export default {

	async index (req, res) {

		const journals = await Model.Journal.findAll()

		res.render('journal/index', {
				session: req.session,
				journals: journals 
		})
	},

	async newJournal(req, res) {
		await Model.Journal.create({
			content: req.body.content,
			title: req.body.title,
			teamMember: req.body.team
		})

		res.redirect('/journal')
	},

	async deleteJournal(req, res) {
		await Model.Journal.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.redirect('/journal')
	}
}