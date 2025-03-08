const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../db");

const Feedback = sequelize.define(
  "Feedback",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "Feedback",
    timestamps: true,
    underscored: false,
  }
);

Feedback.beforeUpdate((feedback) => {
  feedback.updatedAt = new Date();
});

module.exports = Feedback;
