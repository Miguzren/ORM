const { Sequelize } = require("sequelize");

const sequelize = new Sequelize ({

    dialect: "sqlite",
    storage: "./databse.sqlite",
    logging: false,
    
});

module.exports = sequelize;
