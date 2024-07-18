module.exports = (sequelize, DataTypes) => {
    const Tickets = sequelize.define('Tickets', {
      email: {
        type: DataTypes.STRING,
        allowNull : false,
      },
       vip: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        get() {
          const regularValue = this.getDataValue("vip");
          return regularValue ? regularValue.split(";") : [];
        },
        set(val) {
          this.setDataValue("vip", Array.isArray(val) ? val.join(";") : '');
        }
      },
       regular: {
        defaultValue: "",
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          const regularValue = this.getDataValue("regular");
          return regularValue ? regularValue.split(";") : [];
        },
        set(val) {
          this.setDataValue("regular", Array.isArray(val) ? val.join(";") : '');
        }
      },
       table: {
        defaultValue: "",
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          const regularValue = this.getDataValue("table");
          return regularValue ? regularValue.split(";") : [];
        },
        set(val) {
          this.setDataValue("table", Array.isArray(val) ? val.join(";") : '');
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
  