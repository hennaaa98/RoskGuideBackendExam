module.exports = app => {
    const profile = require("../controllers/profile.controller.js");
    const favorites = require("../controllers/favorites.controller.js");
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new profile
    router.post("/profile", profile.create);
    router.post("/login", profile.findOne);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/favorites", favorites.findAllByProfileId);
  
    // Retrieve a single Tutorial with id
    router.get("/login", profile.login);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/rosguide', router);
  };