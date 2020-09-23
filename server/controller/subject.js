
import Model from '../models'

export default {
    
    async index(req, res) {
        const subject = await Model.Subject.findAll()
        res.render ('subject', {
            session: req.session,
            subject: subject        
        })
    },

    async newSubject(req, res) {
		await Model.Subject.create({
			name: req.body.name
		})

		res.redirect('/subject')
	},

	async deleteSubject(req, res) {
		await Model.Student.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.redirect('/subject')
	},
}