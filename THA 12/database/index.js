// using sequelize

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres",
    "postgres", 
    "123456789", {
    host: "localhost",
    dialect: "postgres",
}
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection established with db");
  } catch (err) {
    console.log("unable to connect to db");
  }
})();

module.exports= sequelize;