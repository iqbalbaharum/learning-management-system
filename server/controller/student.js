
import Model from '../models'

export default {
    
    async index(req, res) {
        
        const student = await Model.Student.findAll({ 
            include: [{
                model: Model.Subject,
                as: 'subjects'
            }] 
        })
        const subject = await Model.Subject.findAll()

        res.render ('student', {
            session: req.session,
            student: student,
            subject: subject      
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
    
    async assignStudentToSubject (req, res) {
        await Model.StudentSubject.create ({
            studentId: req.body.id,
            subjectId: req.body.subjectId
        })

        res.redirect('/student')
    }
}