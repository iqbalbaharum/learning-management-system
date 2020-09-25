

/* 1 subject has many students */
/* Nama model pakai yang alias punya */

module.exports = (sequelize, DataTypes) => {
    const StudentSubject = sequelize.define('StudentSubject', {
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
        StudentSubject.belongsTo(models.Subject, { foreignKey: 'subjectId '}),
        StudentSubject.belongsTo(models.Student, { foreignKey: 'studentId '})
    }

    StudentSubject.sync({ alter: true });
    console.log("The table for the StudentSubject model was just (re)created!");

    return StudentSubject;
};