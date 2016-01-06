'use strict';
module.exports = function(sequelize, DataTypes) {
  var ListItem = sequelize.define('ListItem', {
    text: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        ListItem.belongsTo(models.CheckList);
      }
    }
  });
  return ListItem;
};