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
    location_type: {
      type: Sequelize.STRING,
      references: {
        model: sequelize.Locationtype,
        key: 'type_id'
     }
    }
  });

  return Location;
};