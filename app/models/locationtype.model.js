module.exports = (sequelize, Sequelize) => {
  const Locationtype = sequelize.define("locationtype", {
    type_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type_name: {
      type: Sequelize.STRING
    },
    location_id: {
      type: Sequelize.INTEGER,
      references: {
        model: sequelize.Location,
        key: 'location_id'
      }
    }
  });

  return Locationtype;
};