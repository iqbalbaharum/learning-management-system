module.exports = (sequelize, DataTypes) => {
	const Tag = sequelize.define('Tag', {
		name: DataTypes.STRING,
		text:DataTypes.STRING
	});

	return Tag;
};
