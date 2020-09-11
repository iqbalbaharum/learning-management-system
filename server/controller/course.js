
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
			level: req.body.level,
			class: req.body.class,
			faculty: req.body.faculty
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
},

async updateCourse (req, res) {
	await Model.Course.update({
	  where: {
			level: req.body.level,
			class: req.body.class,
			faculty: req.body.faculty
		})

		res.redirect('/course')
	}
}
