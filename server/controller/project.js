

import Model from '../models'

export default {

    async index (req, res) {
        /* Select All Elemnts in table Project */
        const project = await Model.Project.findAll()
        /* Count All Elemnts in table Project */
        const totalElem = await Model.Project.count();
        res.render('project/index', {
            session: req.session,
            project: project,
            totalElem: totalElem
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
        console.log(req.body)
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