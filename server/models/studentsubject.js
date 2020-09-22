module.exports = (sequelize, DataTypes) => {

	let StudentSubject = sequelize.define('StudentSubject', {
        studentId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Students',
              key: 'id'
            }
        },
        subjectId: {
					type: DataTypes.INTEGER,
					references: {
						model: 'Subjects',
						key: 'id'
					}
			}
	});

	StudentSubject.associate = function(models) {
        StudentSubject.belongsTo(models.Student, { foreignKey: 'studentId' })
        StudentSubject.belongsTo(models.Subject, { foreignKey: 'subjectId' })
	}

	return StudentSubject;
};
