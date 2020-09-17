module.exports = (sequelize, DataTypes) => {
	const Notes = sequelize.define('Notes', {
		course: DataTypes.STRING,
		topic: DataTypes.STRING,
		content: DataTypes.TEXT
	});

	return Notes;
}; 