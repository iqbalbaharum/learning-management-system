module.exports = (sequelize, DataTypes) => {
	const Journal = sequelize.define('Course', {
		title: DataTypes.STRING,
		content: DataTypes.STRING,
		teamMember: DataTypes.INTEGER
	});

	return Course;
};
