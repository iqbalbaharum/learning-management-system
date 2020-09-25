
/* 1 subject has many students */
module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define('Subject', {
        name: DataTypes.STRING
    });

    Subject.associate = function(models) {
        Subject.belongsToMany(models.Student, {
            through: models.StudentSubject,
            /* Tak faham sangat part ni */
            foreignKey: 'subjectId',
            as: 'students'
        })
    }

    return Subject;
};