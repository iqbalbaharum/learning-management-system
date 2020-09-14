
import Model from '../models'

export default {

	async index (req, res) {
		const games = await Model.Games.findAll()
		res.render('games/index', {
				session: req.session,
				games: games 
		})
	},

	async newGames(req, res) {
		await Model.Games.create({
			course: req.body.course,
			topic: req.body.topic,
			content: req.body.content

		})
		res.redirect('/games')
	},

	async deleteGames(req, res) {
		await Model.Games.destroy({
			where: {
				id: req.params.id
			}	
		})
		res.redirect('/games')
	},


	async updateGames(req, res) {
		await Model.Games.update({
			course: req.body.course,
			topic: req.body.topic,
			content: req.body.content
		},{
			where: {
				id: req.body.id
			}

		});
		res.redirect('/games')
	}

}