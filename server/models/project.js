
/* Model ni database. So kat sini kita boleh create table
   dan letak attribute */
   import Model from '../models'
   const Journal = Model.Journal

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        /* Kalau tak define PK, dia akan auto create id dlm db */
        projID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        teamMember: DataTypes.INTEGER
    }, {
        /* Enforcing the table name to be equal to the model name */
        freezeTableName: true
    });
    /* I put this to remove id attribute because there 
       will be an error saying cannot have two PK in a 
       table even though I have declared projID as the PK */
    Project.removeAttribute('id');

    Project.associate = function(models) {
        Project.hasMany(models.Journal);
        Journal.belongsTo(Project);
    }

    /* This line is to sync the project table in database
       which means if we add new attributes in this project
       model, it will automatically update project table in
       database  */
    Project.sync({ alter: true });
    console.log("The table for the Project model was just (re)created!");

    return Project;
};