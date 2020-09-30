module.exports = (sequelize, DataTypes) => {
	let Tag = sequelize.define('Tag', {
		name: DataTypes.STRING
	});

	Tag.associate = function(models) {
		Tag.belongsToMany(models.Tutorial, {
			through: models.tutorial_tag,
			foreignKey: 'tagId',
			as: 'tutorials'
		})
	}
	return Tag;
};
