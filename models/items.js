const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Items = sequelize.define(
  "items",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
  },
  {
    logging: false,
  }
);

module.exports = Items;
