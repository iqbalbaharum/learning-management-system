import Model from '../models'

const Tutorial = Model.tutorial;
const Tag = Model.tag;

// Create and Save new Tutorials
exports.createTutorial = (tutorial) => {
  return Tutorial.create({
    title: tutorial.title,
    description: tutorial.description,
  })
    .then((tutorial) => {
      console.log(">> Created tutorial: " + JSON.stringify(tutorial, null, 4));
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while creating tutorial: ", err);
    });
};

//Retrieve all Tutorials

exports.findAll = () => {
  return Tutorial.findAll({
    include: [
      {
        model: Tag,
        as: "tag",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["tag_id", "tutorial_id"],
        // },
      },
    ],
  })
    .then((tutorial) => {
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Tutorials: ", err);
    });
};

//Get the Tutorial for a given tutorial id

exports.findById = (id) => {
  return Tutorial.findByPk(id, {
    include: [
      {
        model: Tag,
        as: "tag",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["tag_id", "tutorial_id"],
        // },
      },
    ],
  })
    .then((tutorial) => {
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while finding Tutorial: ", err);
    });
};

export default {

	async index (req, res) {
		const tutorial = await Model.Tutorial.findAll()
		res.render('tutorial/index', {
				session: req.session,
				tutorial: tutorial
		})
	},

	async newTutorial(req, res) {
		await Model.Tutorial.create({
      title: req.body.title,
      description: req.body.description
		})
		res.redirect('/tutorial')
	},

	async deleteTutorial(req, res) {
		await Model.Tutorial.destroy({
			where: {
				id: req.params.id
			}
		})

		res.redirect('/tutorial')
	},

	async updateTutorial(req, res){
					console.log(req.body)
					await Model.Tutorial.update({
						title: req.body.title,
			      description: req.body.description
					 },{
							where: {
								id: req.body.id
							}
						});
						res.redirect('/tutorial')
					}
}
