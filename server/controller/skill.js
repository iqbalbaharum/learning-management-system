
import Model from '../models'

export default {

	async index (req, res) {
		const skill = await Model.Skill.findAll()
		res.render('skill/index', {
				session: req.session,
				skill: skill 
		})
	},

	async newSkill(req, res) {
		await Model.Skill.create({
			skill: req.body.skill,
			
		})

		res.redirect('/skill')
	},

	async deleteSkill(req, res) {
		await Model.Skill.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.redirect('/skill')
	}
}