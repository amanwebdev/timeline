'use strict';
module.exports = function(sequelize, DataTypes) {
  var Checklist = sequelize.define('Checklist', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Checklist.belongsTo(models.Task);
        Checklist.hasMany(models.ListItem);
      }
    }
  });
  return Checklist;
};