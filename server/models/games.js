module.exports = (sequelize, DataTypes) => {
	const Games = sequelize.define('Games', {
		title: DataTypes.STRING,
		topic: DataTypes.STRING,
        content: DataTypes.TEXT
	});

	return Games;
};