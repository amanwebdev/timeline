'use strict';
module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        name: DataTypes.STRING,
        status: DataTypes.STRING,
        startTime: DataTypes.DATE,
        finishTime: DataTypes.DATE,
        comments: DataTypes.STRING,
        hours: DataTypes.INTEGER,
        minutes: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                Task.belongsTo(models.User);
                Task.hasMany(models.CheckList);
            }
        },
        createdAt: false,
        updatedAt: false,
        underscored: true
    });
    return Task;
};
