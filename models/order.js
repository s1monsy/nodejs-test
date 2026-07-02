const Sequalize = require("sequalize");

const sequalize = require("../util/database");

const Order = sequelize.define("order", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Order;
