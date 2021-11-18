module.exports = (sequelize, Sequelize) => {
  const Favorites = sequelize.define("favorites", {
    favorites_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    profile_id: {
      type: Sequelize.INTEGER
    },
    location_id: {
      type: Sequelize.INTEGER
    }
  });

  return Favorites;
};