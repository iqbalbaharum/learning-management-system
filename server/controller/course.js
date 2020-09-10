
import Model from '../models'

export default {

	async index (req, res) {
		const course = await Model.Course.findAll()
		res.render('course/index', {
				session: req.session,
				course: course
		})
	},

	async newCourse(req, res) {
		await Model.Course.create({
			content: req.body.content,
			title: req.body.title,
			teamMember: req.body.team
		})

		res.redirect('/course')
	},

	async deleteCourse(req, res) {
		await Model.Course.destroy({
			where: {
				id: req.params.id
			}
		})

		res.redirect('/course')
	}
}