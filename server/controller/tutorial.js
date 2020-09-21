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

// Create and Save new Tag
exports.createTag = (tutorialId, tag) => {
  return Tag.create({
    name: comment.name,
    text: comment.text,
    tutorialId: tutorialId,
  })
    .then((comment) => {
      console.log(">> Created tag: " + JSON.stringify(tag, null, 4));
      return tag;
    })
    .catch((err) => {
      console.log(">> Error while creating tag: ", err);
    });
};

// Get the Tag for a given tutorial
exports.findTutorialById = (tutorialId) => {
  return Tutorial.findByPk(tutorialId, { include: ["tag"] })
    .then((tutorial) => {
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while finding tutorial: ", err);
    });
};

// Get the Tag for a given Tag id
exports.findCommentById = (id) => {
  return Tag.findByPk(id, { include: ["tutorial"] })
    .then((comment) => {
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while finding tag: ", err);
    });
};

// Get all Tutorials include Tag
exports.findAll = () => {
  return Tutorial.findAll({
    include: ["tag"],
  }).then((tutorial) => {
    return tutorial;
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
