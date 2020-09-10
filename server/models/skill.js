module.exports = (sequelize, DataTypes) => {
	const Skill = sequelize.define('Skill', {
		skill: DataTypes.STRING,
	});

	return Skill;
};