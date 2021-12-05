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
db.quiz = require("./quiz.model.js")(sequelize, Sequelize);
db.question = require("./question.model.js")(sequelize, Sequelize);
db.option = require("./option.model.js")(sequelize, Sequelize);


module.exports = db;