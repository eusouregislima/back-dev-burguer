"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("products", "offer", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      alowNull: false,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("products", "offer")
  },
}
