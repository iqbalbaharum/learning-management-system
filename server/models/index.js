const Fs = require("fs");
const Path = require("path");
const Sequelize = require("sequelize");
const Settings = require("../../settings");
const dbSettings = Settings[Settings.env].db;

const sequelize = new Sequelize(
	dbSettings.database,
	dbSettings.user,
	dbSettings.password,
	dbSettings
);

const db = {};

Fs.readdirSync(__dirname)
	.filter(file => file.indexOf(".") !== 0 && file !== "index.js")
	.forEach(file => {
		const model = require('./' + file)(sequelize, Sequelize.DataTypes)
		db[model.name] = model;
	});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.notes = require("./notes.js")(sequelize, Sequelize);
db.student = require("./student.js")(sequelize, Sequelize);

db.student.belongsToMany(db.notes, {
  through: "notes_student",
  as: "notes",
  foreignKey: "studentId",
});

db.notes.belongsToMany(db.student, {
  through: "notes_student",
  as: "student",
  foreignKey: "notesId",
});

module.exports = db
