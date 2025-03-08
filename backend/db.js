const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("infotech_db", "root", "Password", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  timezone: "+00:00", // Adjust to your timezone, e.g., "+05:30" for IST
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.error("Error connecting to database:", err));

module.exports = sequelize;
