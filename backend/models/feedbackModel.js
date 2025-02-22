const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Feedback = sequelize.define("Feedback", {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    mobile: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
}, {
    tableName: "feedback", // Ensure it matches your MySQL table name
    timestamps: false      // Disable `createdAt` and `updatedAt` if not needed
});

module.exports = Feedback;
