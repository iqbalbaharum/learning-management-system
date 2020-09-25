//Yesterday
import Model from '../models'

export default {

	async index (req, res) {
        const journals = await Model.Journal.findAll()
        const project = await Model.Project.findAll()
		res.render('journal/index', {
            session: req.session,
            journals: journals,
            project: project
		})
	},

	async newJournal(req, res) {
		await Model.Journal.create({
            /* content, title and etc tu kena ikut nama
               attribute dlm table. kalau tak nanti, data tak masuk */
			content: req.body.content,
			title: req.body.title,
            teamMember: req.body.team,
            projID: req.body.project
        })

		res.redirect('/journal')
	},

	async deleteJournal(req, res) {
		await Model.Journal.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.redirect('/journal')
	},

	// Nasuha
	/* await: stop habiskan proses dulu baru continue. 
	kalau takda proses akan terus berjalan, tak tunggu
	result dari proses tu */
	/* Kalau pakai .get, kita hanya boleh pakai params tak boleh pakai body
	   Kalau pakai post, kita tak boleh pakai params, kena pakai body sahaja
	   Kalau pakai put, boleh pakai dua-dua
	   .get = params
	   .post = body (hantar data, tak keluar kat url eg password)
	   .put = params & body (kat url keluar id je, tak keluar data tu)*/
	async updateJournal(req, res) {
		console.log(req.body)
		await Model.Journal.update({
			content: req.body.content,
			title: req.body.title,
            teamMember: req.body.team,
            project: req.body.project
		}, {
			where: {
				id: req.body.id
			}
		});

		res.redirect('/journal')
	}
}