const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("infotech_db", "root_User", "Password", {
    host: "127.0.0.1", // Use 127.0.0.1 instead of localhost
    dialect: "mysql",
    logging: false, // Disable logging
});

// Test Connection
sequelize.authenticate()
    .then(() => console.log(" Database connected successfully!"))
    .catch(err => console.error(" Error connecting to database:", err));

module.exports = sequelize;
