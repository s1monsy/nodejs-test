const Sequalize = require("sequalize");

const sequalize = require("../util/database");

const CartItem = sequelize.define("cartItem", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quatity: Sequalize.INTEGER,
});

module.exports = CartItem;
