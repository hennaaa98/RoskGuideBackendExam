const { question } = require("../models");
const db = require("../models");
const Quiz = db.quiz;
const Question = db.question;
const Option = db.option;
const Op = db.Sequelize.Op;

// Find a single quiz for a given location
exports.findOne = (req, res) => {
  const location_id = req.query.location_id;

  Quiz.findOne({ where: {location_id: location_id} })
    .then(data => {
      console.log(data);
      data_vals = data.dataValues
      Question.findAll ({ where: {quiz_id: data.quiz_id} }).then(questions => {
        question_values = [];
        questions.forEach(question_data => {
          question_values.push(question_data.dataValues);
        });
        data_vals.questions = question_values;
        data_vals.questions.forEach(question => {
          Option.findAll ({ where: {quiz_id: data.quiz_id, question_no: question.question_no} })
          .then(options => {
            
            option_values = [];
            options.forEach(options_data => {
              option_values.push(options_data.dataValues);
            });
            
            question.options = option_values;
            
            res.send(data);
          })
        });
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: "Error retrieving quiz"
      });
    });

};