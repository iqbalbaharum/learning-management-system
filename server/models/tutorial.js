
module.exports = (sequelize, DataTypes) => {
	let Tutorial = sequelize.define('Tutorial', {
		title: DataTypes.STRING,
		description: DataTypes.STRING,
	});

	Tutorial.associate = function(models) {
		Tutorial.belongsToMany(models.Tag, {
			through: models.TutorialTag,
			foreignKey: 'tutorialId',
			as: 'tags'
		})
	}

	return Tutorial;
};
