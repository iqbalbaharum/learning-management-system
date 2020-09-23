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
                key: 'id',
                as: 'projects'
            }
        }
    }, {
        //Enforcing the table name to be equal to the model name
        freezeTableName: true
    });

    Journal.associate = function(models) {
        Journal.belongsTo(Project, { foreignKey: 'projID' })
    }

    Journal.sync({ alter: true });
    console.log("The table for the Journal model was just (re)created!");

    return Journal;
};