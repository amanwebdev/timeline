'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    startTime: DataTypes.DATE,
    finishTime: DataTypes.DATE,
    comments: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User);
        Task.hasMany(models.Checklist);
      }
    }
  });
  return Task;
};