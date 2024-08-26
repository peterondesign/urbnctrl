module.exports = (sequelize, DataTypes) => {
  const Admins = sequelize.define("Admins", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: false,
      validate: {
        isIn: [["super", "events", "blog"]],
      },
    },
  });

  return Admins;
};
