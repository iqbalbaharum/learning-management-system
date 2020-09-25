//Yesterday
//using sequalize object
import Model from '../models'
const Project = Model.Project
module.exports = (sequelize, DataTypes) => {
    let Journal = sequelize.define('Journal', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        teamMember: DataTypes.INTEGER,
        projID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Project',
                key: 'projID',
                as: 'projects'
            }
        }
    }, {
        //Enforcing the table name to be equal to the model name
        freezeTableName: true
    });

    Journal.associate = function(models) {
        Journal.belongsTo(models.Project, { 
            foreignKey: 'projID' 
        })
    }

    Journal.sync({ alter: true });
    console.log("The table for the Journal model was just (re)created!");

    // Project.hasMany(Journal, {
	// 	foreignKey: 'clubId'
	// });
    // Journal.belongsTo(Project);

    return Journal;
};