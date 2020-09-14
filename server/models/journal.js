//Yesterday
//using sequalize object
module.exports = (sequelize, DataTypes) => {
	const Journal = sequelize.define('Journal', {
		title: DataTypes.STRING,
		content: DataTypes.STRING,
		teamMember: DataTypes.INTEGER
	});

	return Journal;
};