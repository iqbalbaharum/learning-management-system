
/* Model ni database. So kat sini kita boleh create table
   dan letak attribute */
   import Model from '../models'
   const Journal = Model.Journal
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        teamMember: DataTypes.INTEGER
    }, {
        //Enforcing the table name to be equal to the model name
        freezeTableName: true
    });

    Project.associate = function(models) {
        Project.hasMany(Journal, {
            foreignKey: 'id'
        });
        Journal.belongsTo(Project);
    }

    Project.sync({ alter: true });
    console.log("The table for the Project model was just (re)created!");

    return Project;
};