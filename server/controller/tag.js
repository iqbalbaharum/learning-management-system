
import Model from '../models'

export default {

	async index (req, res) {
		const tag = await Model.Tag.findAll()
		res.render('tag/index', {
				session: req.session,
				tag: tag
		})
	},

	async newTag(req, res) {
		await Model.Tag.create({
      name: req.body.name
		})
		res.redirect('/tag')
	},

	async deleteTutorial(req, res) {
		await Model.Tutorial.destroy({
			where: {
				id: req.params.id
			}
		})

		res.redirect('/tag')
	},

	async updateTutorial(req, res){
					console.log(req.body)
					await Model.Tag.update({
						name: req.body.name
					 },{
							where: {
								id: req.body.id
							}
						});
						res.redirect('/tag')
					}
}
