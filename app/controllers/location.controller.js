const db = require("../models");
const Location = db.location;
const Op = db.Sequelize.Op;

// Retrieve all favorites from the database.
exports.findAll = (req, res) => {
    const name = req.query.location_name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Location.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving locations."
        });
      });
};