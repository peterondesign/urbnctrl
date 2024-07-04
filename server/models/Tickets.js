module.exports = (sequelize, DataTypes) => {
    const Tickets = sequelize.define('Tickets', {
      email: {
        type: DataTypes.STRING,
        allowNull : false,
      },
      vip: {
        type: DataTypes.STRING,
        allowNull: true,
        get(){
          return this.getDataValue("vip").split(";")
        },
        set(val){
          this.setDataValue("vip",val.join(";"))
        }
      },
      regular: {
        type: DataTypes.STRING,
        allowNull: true,
        get(){
          return this.getDataValue("regular").split(";")
        },
        set(val){
          this.setDataValue("regular",val.join(";"))
        }
      },
      table: {
        type: DataTypes.STRING,
        allowNull: true,
        get(){
          return this.getDataValue("table").split(";")
        },
        set(val){
          this.setDataValue("table",val.join(";"))
        }
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
  