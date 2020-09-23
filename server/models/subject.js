
/* 1 subject has many students */
import Model from '../models'
Student = Model.Student
module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define('Subject', {
        name: DataTypes.STRING
    });

    Subject.belongsToMany(Student, { 
        through: 'subjectStudent' 
    })

    return Subject;
};