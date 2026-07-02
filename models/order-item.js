const Sequalize = require("sequalize");

const sequalize = require("../util/database");

const OrderItem = sequelize.define("orderItem", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quatity: Sequalize.INTEGER,
});

module.exports = OrderItem;
