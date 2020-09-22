module.exports = (sequelize, DataTypes) => {
	const Tag = sequelize.define('Tag', {
		tag: DataTypes.STRING
	});

	return Tag;
};