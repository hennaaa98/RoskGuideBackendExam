const db = require("../models");
const Profile = db.profile;
const Op = db.Sequelize.Op;

// Create and Save a new profile
exports.create = (req, res) => {

  // Create a profile
  const profile = {
    full_name: req.body.full_name,
    email: req.body.email,
    telephone: req.body.telephone,
    p_location: req.body.p_location,
    t_location: req.body.t_location,
    password: req.body.password
  };

  // Save profile in the database
  Profile.create(profile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating your profile."
      });
    });
};

// Find a single profile with email and password
exports.login = (req, res) => {
    const email = req.query.email;
    const password = req.query.password;

    Profile.findOne({ where: {email: email, password: password} })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message: "Error retrieving profile with email=" + email + " and password=" + password
        });
      });
  
};

// Update a profile by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Profile.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Profile was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update profile with id=${id}. Maybe profile was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating profile with id=" + id
        });
      });
  
};