module.exports = (sequelize, DataTypes) => {
	const Course = sequelize.define('Course', {
		level: DataTypes.STRING,
		class: DataTypes.STRING,
		faculty: DataTypes.STRING
	});

	return Course;
};
