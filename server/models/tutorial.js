
module.exports = (sequelize, DataTypes) => {
	const Tutorial = sequelize.define('Tutorial', {
		title: DataTypes.STRING,
		description: DataTypes.STRING,
	});

	return Tutorial;
};


//const Tutorial = sequelize.define('Tutorial', {
//	title: DataTypes.STRING,
//	description: DataTypes.STRING,
//});

//const Tag = sequelize.define('Tag', {
//  name: DataTypes.STRING,
//});
