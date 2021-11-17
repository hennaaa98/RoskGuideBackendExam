module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profile", {
    profile_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    telephone: {
      type: Sequelize.INTEGER
    },
    p_location: {
      type: Sequelize.STRING
    },
    // t_location: {
    //   type: Sequelize.STRING
    // },
    password: {
      type: Sequelize.STRING
    },
  });

  return Profile;
};