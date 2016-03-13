'use strict';
var models = require('../models');

module.exports = function(sequelize, DataTypes) {
    var CheckList = sequelize.define('CheckList', {
        name: { type: DataTypes.STRING },
        task_id: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            references: {
                model: models.Task,
                key: 'id',
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                CheckList.belongsTo(models.Task);
                CheckList.hasMany(models.ListItem);
            }
        },
        paranoid: true,
        underscored: true
    });
    return CheckList;
};
