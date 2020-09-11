module.exports = (sequelize, DataTypes) => {
	const Module = sequelize.define('Module', {
		course: DataTypes.STRING,
		title: DataTypes.STRING,
		author: DataTypes.STRING,
		content: DataTypes.TEXT
	});

	return Module;
};