
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
	},

	async updateCourse(req, res){
	        console.log(req.body)
	        await Model.Course.update({
						level: req.body.level,
						class: req.body.class,
						faculty: req.body.faculty
	         },{
	            where: {
	              id: req.body.id
	            }
	          });
	          res.redirect('/course')
					}
}
