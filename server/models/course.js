module.exports = (sequelize, DataTypes) => {
	const Course = sequelize.define('Course', {
		title: DataTypes.STRING,
		content: DataTypes.STRING,
		teamMember: DataTypes.INTEGER
	});

	return Course;
};
