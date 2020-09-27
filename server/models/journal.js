
//using sequalize object
/* 1 project has many journals (one-to-many relationship)
   jadi kita letak PK drpd model project kat model journal */
import Model from '../models'
const Project = Model.Project
module.exports = (sequelize, DataTypes) => {
    let Journal = sequelize.define('Journal', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        teamMember: DataTypes.INTEGER,
        /* Create attribute baru which is projID.
           References tu pula macam kita define projID ni 
           daripada mana since kita nak jadikan dia foreign key. 
           Maksudnya projID dia ambil drpd model Project, value 
           dia adalah projID drpd projID attribute. */
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
    
    return Journal;
};