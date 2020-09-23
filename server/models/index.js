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


db.tutorial = require("./tutorial.js")(sequelize, Sequelize);
db.tag = require("./tag.js")(sequelize, Sequelize);

db.tag.belongsToMany(db.tutorial, {
  through: "tutorial_tag",
  as: "tutorial",
  foreignKey: "tagId",
});

db.tutorial.belongsToMany(db.tag, {
  through: "tutorial_tag",
  as: "tag",
  foreignKey: "tutorialId",
});

module.exports = db
