
module.exports = (sequelize, DataTypes) => {
	const Tutorial = sequelize.define('Tutorial', {
		title: DataTypes.STRING,
		description: DataTypes.STRING,
	});

	return Tutorial;
};
