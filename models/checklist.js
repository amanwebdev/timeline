'use strict';
module.exports = function(sequelize, DataTypes) {
  var CheckList = sequelize.define('CheckList', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        CheckList.belongsTo(models.Task);
        CheckList.hasMany(models.ListItem);
      }
    }
  });
  return CheckList;
};