'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate(models) {
      this.belongsTo(models.categorie, {
        foreignKey: 'cate_id',
        targetKey: 'id',
      })
    }
  };
  product.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    prod_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prod_preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    prod_preco_desc: {
      type: DataTypes.DECIMAL(10,2),
      defaultValue: null
    },
    prod_qt_estoque: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    cate_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'product',
    tableName: 'products'
  });
  return product;
};