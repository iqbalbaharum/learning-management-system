
import Model from '../models'

const Tutorial = Model.tutorial;
const Tag = Model.tag;

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

	async deleteTag(req, res) {
		await Model.Tag.destroy({
			where: {
				id: req.params.id
			}
		})

		res.redirect('/tag')
	},

	async updateTag(req, res){
					console.log(req.body)
					await Model.Tag.update({
						name: req.body.name
					 },{
							where: {
								id: req.body.id
							}
						});
						res.redirect('/tag')
					},

  async assignTag(req, res){
					console.log(req.body)
					await Model.Tag.update({
						name: req.body.name,
					 },{
							where: {
								id: req.body.id
							}
						});
						res.redirect('/tag')
					}
}
