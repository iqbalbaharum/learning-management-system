import Model from '../models'

export default {

	async index (req, res) {
		const tutorial = await Model.Tutorial.findAll()
		const tag = await Model.Tag.findAll()
		res.render('tutorial/index', {
				session: req.session,
				tutorial: tutorial,
				tag:tag
		})
	},

	async newTutorial(req, res) {
		await Model.Tutorial.create({
      title: req.body.title,
      description: req.body.description
		})
		res.redirect('/tutorial')
	},

	async deleteTutorial(req, res) {
		await Model.Tutorial.destroy({
			where: {
				id: req.params.id
			}
		})

		res.redirect('/tutorial')
	},

	async updateTutorial(req, res){
					console.log(req.body)
					await Model.Tutorial.update({
						title: req.body.title,
			      description: req.body.description
					 },{
							where: {
								id: req.body.id
							}
						});
						res.redirect('/tutorial')
					}
}
