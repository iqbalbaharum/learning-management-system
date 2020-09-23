
import Model from '../models'

export default {
    
    async index(req, res) {
        const student = await Model.Student.findAll()
        res.render ('student', {
            session: req.session,
            student: student        
        })
    },

    async newStudent(req, res) {
		await Model.Student.create({
			name: req.body.name,
			email: req.body.email,
			gender: req.body.gender
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
}