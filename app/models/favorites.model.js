module.exports = (sequelize, Sequelize) => {
  const Favorites = sequelize.define("favorites", {
    profile_id: {
      type: Sequelize.INTEGER,
      references: {
        model: sequelize.Profile,
        key: 'profile_id'
      }
    },
    location_id: {
      type: Sequelize.INTEGER,
      references: {
        model: sequelize.Location,
        key: 'location_id'
      }
    }
  });

  return Favorites;
};