'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Building.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    floors: DataTypes.INTEGER,
    units: DataTypes.INTEGER,
    parking: DataTypes.INTEGER,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Building',
    tableName: 'buildings'
  });
  return Building;
};