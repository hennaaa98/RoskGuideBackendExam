const Sequelize = require("sequelize");
const sequelize = new Sequelize('rosguide', 'root', 'root', {
  host: "localhost",
  dialect: "mysql",
  port: 8889,
  define: {
    timestamps: false
  } 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.profile = require("./profile.model.js")(sequelize, Sequelize);
db.location = require("./location.model.js")(sequelize, Sequelize);
db.favorites = require("./favorites.model.js")(sequelize, Sequelize);

module.exports = db;