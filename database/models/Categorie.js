'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorie extends Model {
    static associate(models) {
      this.hasMany(models.product, {
        foreignKey: "cate_id",
      })
    }
  };
  categorie.init({
    cate_descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cate_perc_desc: DataTypes.INTEGER,
    defaultValue: 0
  }, {
    sequelize,
    modelName: 'categorie',
    tableName: 'categories'
  });
  return categorie;
};