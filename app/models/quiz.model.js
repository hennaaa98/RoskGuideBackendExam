module.exports = (sequelize, Sequelize) => {
  const Quiz = sequelize.define("quiz", {
    quiz_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    profile_id: {
      type: Sequelize.INTEGER
    },
    location_id: {
      type: Sequelize.INTEGER
    },
    isComplete: {
      type: Sequelize.BOOLEAN
    }
  });

  return Quiz;
};