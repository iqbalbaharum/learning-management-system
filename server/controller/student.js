
import Model from '../models'

export default {

	async index (req, res) {
        const student = await Model.Student.findAll()
        const notes = await Model.Notes.findAll()
		res.render('student/index', {
				session: req.session,
                student: student,
                notes : notes
		})
	},

	async newStudent(req, res) {
		await Model.Student.create({
      name: req.body.name
		})
		res.redirect('/student')
	},

	async deleteStudent(req, res) {
		await Model.Student.destroy({
			where: {
				id: req.params.id
			}
		})

		res.redirect('/student')
	},

	async updateStudent(req, res){
					console.log(req.body)
					await Model.Student.update({
						name: req.body.name
					 },{
							where: {
								id: req.body.id
							}
						});
						res.redirect('/student')
					}
}