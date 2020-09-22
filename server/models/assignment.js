module.exports = (sequelize, DataTypes) => {
	const Assignment = sequelize.define('Project', {
		name: DataTypes.STRING,
		duedate: DataTypes.DATE
	});

	return Assignment;
};