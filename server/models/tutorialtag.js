module.exports = (sequelize, DataTypes) => {

	let TutorialTag = sequelize.define('TutorialTag', {
        tutorialId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Tutorials',
              key: 'id'
            }
        },
        TagId: {
					type: DataTypes.INTEGER,
					references: {
						model: 'Tags',
						key: 'id'
					}
			}
	});

	TutorialTag.associate = function(models) {
        TutorialTag.belongsTo(models.Tutorial, { foreignKey: 'tutorialId' })
        TutorialTag.belongsTo(models.Tag, { foreignKey: 'tagId' })
	}

	return TutorialTag;
};
