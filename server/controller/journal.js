//Yesterday
import Model from '../models'

export default {

	async index (req, res) {
		const journals = await Model.Journal.findAll()
		res.render('journal/index', {
				session: req.session,
				journals: journals 
		})
	},

	async newJournal(req, res) {
		await Model.Journal.create({
			content: req.body.content,
			title: req.body.title,
			teamMember: req.body.team
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
			teamMember: req.body.team
		}, {
			where: {
				id: req.body.id
			}
		});

		res.redirect('/journal')
	}
}