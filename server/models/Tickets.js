module.exports = (sequelize, DataTypes) => {
    const Tickets = sequelize.define('Tickets', {
      email: {
        type: DataTypes.STRING,
        allowNull : false,
        get(){
          return this.getDataValue("email").split(";")
        },
        set(val){
          this.setDataValue("code",val.join(";"))
        }
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
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      total:{
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    });
  
    return Tickets;
  };
  