
//import Project from '../project'
//const Project = require("../models/project.js");

module.exports = (sequelize, DataTypes) => {
	const Notes = sequelize.define('Notes', {
		course: DataTypes.STRING,
		topic: DataTypes.STRING,
		content: DataTypes.TEXT
	}, {
		freezeTableName: true
	});

	Notes.sync({ alter: true });
    console.log("The table for the Notes model was just (re)created!");

	return Notes;
}; 