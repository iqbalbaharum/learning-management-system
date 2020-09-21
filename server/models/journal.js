//Yesterday
//using sequalize object
module.exports = (sequelize, DataTypes) => {
    const Journal = sequelize.define('Journal', { 
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        teamMember: DataTypes.INTEGER
    }, {
        //Enforcing the table name to be equal to the model name
        freezeTableName: true
    });

    Journal.sync({ alter: true });
    console.log("The table for the Journal model was just (re)created!");

    return Journal;
};