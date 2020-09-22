module.exports = (sequelize, DataTypes) => {

	let Subject = sequelize.define('Subject', {
		name: DataTypes.STRING
	});

	Subject.associate = function(models) {
		Subject.belongsToMany(models.Student, {
			through: models.StudentSubject,
			foreignKey: 'subjectId',
			as: 'students'
		})
	}

	return Subject;
};