import Model from '../models'

export default {

    async index (req, res) {
        const project = await Model.Project.findAll()
        res.render('project/index', {
            session: req.session,
            project: project
        })
    },

    async newProject (req, res) {
        await Model.Project.create ({
            content: req.body.content,
            title: req.body.title,
            teamMember: req.body.team
        })

        res.redirect('/project')
    },

    async deleteProject(req, res) {
        await Model.Project.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/project')
    },

    async updateProject (req, res) {
        await Model.Project.update({
            content: req.body.content,
            title: req.body.title,
            teamMember: req.body.team
        }, {
            where: {
                id: req.body.id
            }
        });

        res.redirect('/project')
    }
}