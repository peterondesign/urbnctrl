module.exports = (sequelize, DataTypes) => {
    const Tickets = sequelize.define('Tickets', {
      email: {
        type: DataTypes.STRING,
        allowNull : false,
      },
      vip: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      regular: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      table: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total:{
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false 
      }
    });
  
    return Tickets;
  };
  