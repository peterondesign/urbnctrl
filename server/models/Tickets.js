module.exports = (sequelize, DataTypes) => {
    const Tickets = sequelize.define('Tickets', {
      email: {
        type: DataTypes.STRING,
        allowNull : false,
      },
       type:{
          type : DataTypes.STRING,
          
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
  