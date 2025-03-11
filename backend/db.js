const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("infotech_db", "root", "Harsh@123", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  timezone: "+05:30", // Set to IST (adjust to your timezone if different)
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.error("Error connecting to database:", err));

module.exports = sequelize;
