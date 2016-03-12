'use strict';
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Task);
            }
        },
        createdAt: false,
        updatedAt: false,
        underscored: true
    });
    return User;
};
