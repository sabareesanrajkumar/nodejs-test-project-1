const mysql = require("mysql2");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-js-test", "root", "9384776379@Sa", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

module.exports = sequelize;
