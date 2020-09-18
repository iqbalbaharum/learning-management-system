
import Model from '../models'

export default {

	async index (req, res) {
		const tag = await Model.Tag.findAll()
		res.render('tutorial/index', {
				session: req.session,
				tags: tag
		})
	},

	async newTag(req, res) {
		await Model.Tag.create({
      name: req.body.name
		})
		res.redirect('/tutorial')
	},

}
