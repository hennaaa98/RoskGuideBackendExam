module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define("question", {
    quiz_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    question_no: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    question_text: {
      type: Sequelize.STRING
    }
  });

  return Question;
};