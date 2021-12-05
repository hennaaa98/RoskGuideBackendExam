module.exports = (sequelize, Sequelize) => {
  const Option = sequelize.define("option", {
    quiz_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    question_no: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    option_no: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    option_text: {
      type: Sequelize.STRING
    },
    isCorrect: {
      type: Sequelize.BOOLEAN
    }
  });

  return Option;
};