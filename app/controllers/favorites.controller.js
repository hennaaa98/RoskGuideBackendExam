const db = require("../models");
const Favorites = db.favorites;
const Op = db.Sequelize.Op;

// Find all favorites by profile_id
exports.findAllByProfileId = (req, res) => {
  Favorites.findAll({ where: { profile_id: req.body.profile_id } })
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

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.profile_id || !req.body.location_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a favorite
  const tutorial = {
    profile_id: req.body.profile_id,
    location_id: req.body.location_id
  };

  // Save favorite in the database
  Favorites.create(favorite)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while favoriting."
      });
    });
};

// Delete a favorite with the specified id in the request
exports.delete = (req, res) => {
  const profile_id = req.params.profile_id;
  const location_id = req.params.location_id;

  Favorites.destroy({
    where: { profile_id: profile_id, location_id: location_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Favorites was successfully removed!"
        });
      } else {
        res.send({
          message: `Cannot remove favorites with id=${id}. Maybe a favorite was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not favorite with id=" + id
      });
    });

};