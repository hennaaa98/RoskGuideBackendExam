module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("location", {
    location_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    location_icon: {
      type: Sequelize.STRING
    },
    location_name: {
      type: Sequelize.STRING
    },
    location_openinghours: {
      type: Sequelize.STRING
    },
    location_website: {
      type: Sequelize.STRING
    },
    location_lat: {
      type: Sequelize.INTEGER
    },
    location_lng: {
      type: Sequelize.INTEGER
    }
  });

  return Location;
};