
module.exports = (sequelize, DataTypes) => {
	let Tutorial = sequelize.define('Tutorial', {
		title: DataTypes.STRING,
		description: DataTypes.STRING,
	});

	Tutorial.associate = function(models) {
		Tutorial.belongsToMany(models.Tag, {
			through: models.tutorial_tag,
			foreignKey: 'tutorialId',
			as: 'tags'
		})
	}

	return Tutorial;
};
