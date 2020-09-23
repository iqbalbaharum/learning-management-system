
import Model from '../models'

const Tutorial = Model.tutorial;
const Tag = Model.tag;

// Create and Save new Tag
exports.create = (tag) => {
  return Tag.create({
    name: tag.name,
  })
    .then((tag) => {
      console.log(">> Created Tag: " + JSON.stringify(tag, null, 2));
      return tag;
    })
    .catch((err) => {
      console.log(">> Error while creating Tag: ", err);
    });
};

//Find all Tags
exports.findAll = () => {
  return Tag.findAll({
    include: [
      {
        model: Tutorial,
        as: "tutorial",
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((tags) => {
      return tags;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Tags: ", err);
    });
};

//Find a Tag for a given Tag id
exports.findById = (id) => {
  return Tag.findByPk(id, {
    include: [
      {
        model: Tutorial,
        as: "tutorial",
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((tag) => {
      return tag;
    })
    .catch((err) => {
      console.log(">> Error while finding Tag: ", err);
    });
};

//Add a Tutorial to a Tag
exports.addTutorial = (tagId, tutorialId) => {
  return Tag.findByPk(tagId)
    .then((tag) => {
      if (!tag) {
        console.log("Tag not found!");
        return null;
      }
      return Tutorial.findByPk(tutorialId).then((tutorial) => {
        if (!tutorial) {
          console.log("Tutorial not found!");
          return null;
        }

        tag.addTutorial(tutorial);
        console.log(`>> added Tutorial id=${tutorial.id} to Tag id=${tag.id}`);
        return tag;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Tutorial to Tag: ", err);
    });
};


export default {

	async index (req, res) {
		const tag = await Model.Tag.findAll()
		res.render('tag/index', {
				session: req.session,
				tag: tag
		})
	},

	async newTag(req, res) {
		await Model.Tag.create({
      name: req.body.name
		})
		res.redirect('/tag')
	},

	async deleteTag(req, res) {
		await Model.Tag.destroy({
			where: {
				id: req.params.id
			}
		})

		res.redirect('/tag')
	},

	async updateTag(req, res){
					console.log(req.body)
					await Model.Tag.update({
						name: req.body.name
					 },{
							where: {
								id: req.body.id
							}
						});
						res.redirect('/tag')
					}
}
