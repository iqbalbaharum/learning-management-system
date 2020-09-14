/* Model ni database. So kat sini kita boleh create table
   dan letak attribute */
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', { 
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        teamMember: DataTypes.INTEGER
    })

    return Project;
};