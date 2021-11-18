const db = require("../models");
const Favorites = db.favorites;
const Op = db.Sequelize.Op;

// Find all favorites by profile_id
exports.findAllByProfileId = (req, res) => {
  Favorites.findAll({ where: { profile_id: req.query.profile_id } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving favorites."
    });
  });
};