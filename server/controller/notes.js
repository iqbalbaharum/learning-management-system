
import Model from '../models'

export default {

	async index (req, res) {
		const notes = await Model.Notes.findAll()
		res.render('notes/index', {
				session: req.session,
				notes: notes
		})
	},

	async newNotes(req, res) {
		await Model.Notes.create({
			course: req.body.course,
			topic: req.body.topic,
			content: req.body.content

		})

		res.redirect('/notes')
	},

	async deleteNotes(req, res) {
		await Model.Notes.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.redirect('/notes')
	},


	async updateNotes(req, res) {
		await Model.Notes.update({
			course: req.body.course,
			topic: req.body.topic,
			content: req.body.content
		},{
			where: {
				id: req.body.id
			}

		});
		res.redirect('/notes')
	},

	async assignNotes(req, res){
		console.log(req.body)
		await Model.Notes.update({
			course: req.body.course,
			topic: req.body.topic,
			content: req.body.content
		},{
				where: {
					id: req.body.id
				}
			});
			res.redirect('/notes')
		}
}