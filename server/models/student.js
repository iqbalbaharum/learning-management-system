module.exports = (sequelize, DataTypes) => {

	let Student = sequelize.define('Student', {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		gender: DataTypes.STRING
	});

	Student.associate = function(models) {
		Student.belongsToMany(models.Subject, {
			through: models.StudentSubject,
			foreignKey: 'studentId',
			as: 'subjects'
		})
	}

	return Student;
};
