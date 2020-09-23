
//import Project from '../project'
//const Project = require("../models/project.js");
module.exports = (sequelize, DataTypes) => {
	const AcademyModule = sequelize.define('academy_module', {
		academy_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        module_id: DataTypes.INTEGER,
        module_module_type_id: DataTypes.INTEGER,
        sort_number: DataTypes.INTEGER,
        requirements_id: DataTypes.INTEGER
	}, {
		freezeTableName: true
	});

	return AcademyModule;
}; 