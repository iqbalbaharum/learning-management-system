import Model from '../models'

export default {

    async index(req, res) {

			let students = []
			let subjects = []

			try {
				students = await Model.Student.findAll({
					include: [{
						model: Model.Subject,
						as: 'subjects'
					}]
				})
				subjects = await Model.Subject.findAll()
			} catch(e) {
				console.log(e)
			}

			console.log(students)


			res.render('student', {
				session: req.session,
				students: students,
				subjects: subjects
			})
    },

    async newStudent(req, res) {
			await Model.Student.create({
				name: req.body.studentname,
				email: req.body.email,
				gender: req.body.gender
			})

			res.redirect('/student')
		},

		async assignStudentToSubject(req, res) {
			await Model.StudentSubject.create({
				studentId: req.body.id,
				subjectId: req.body.subjectId,
			})

			res.redirect('/student')
		}
}
