'use strict';
module.exports = function(sequelize, DataTypes) {
  var Twit = sequelize.define('Twit', {
    tweetId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    media: DataTypes.JSON
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Twit;
};