
module.exports = (sequelize, DataTypes) => {
    let Assignment = sequelize.define('Assignment', {
        name: DataTypes.STRING,
        duedate: DataTypes.DATE
    });

    return Assignment;
};