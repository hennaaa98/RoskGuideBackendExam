module.exports = app => {
  const profile = require("../controllers/profile.controller.js");
  const location = require("../controllers/location.controller.js");
  const quiz = require("../controllers/quiz.controller.js");


  var router = require("express").Router();

  // Create a new profile
  router.post("/profile", profile.create);

  // Retrieve a single profile
  router.get("/login", profile.login);

  // Retrieve all locations
  router.get("/location", location.findAll);

  router.get("/quiz", quiz.findOne);

  // Retrieve all favorites
  // router.get("/favorites", favorites.findAllByProfileId);

  app.use('/api/rosguide', router);
};