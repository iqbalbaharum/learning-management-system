
import Model from '../models'

export default {

	async index (req, res) {
		const module = await Model.Module.findAll()
		res.render('module/index', {
				session: req.session,
				modules: modules
		})
	},

	async newModule(req, res) {
		await Model.Module.create({
            course: req.body.course,
			title: req.body.title,
			author: req.body.author,
			content: req.body.content,
		})

		res.redirect('/module')
	},

	async deleteModule(req, res) {
		await Model.Module.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.redirect('/module')
	},
	async newModule(req, res) {
	console.log(req,body)
	await Model.Module.create({
		course: req.body.course,
		title: req.body.title,
		author: req.body.author,
		content: req.body.content,
	})

	res.redirect('/module')
	},
}
