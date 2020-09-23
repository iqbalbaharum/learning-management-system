
import Model from '../models'
Subject = Model.Subject
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        gender: DataTypes.STRING
    });

    Subject.belongsToMany(Student, { 
        through: 'subjectStudent' 
    })

    return Student;
};