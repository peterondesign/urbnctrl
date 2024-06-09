module.exports = (sequelize, DataTypes) => {
    const Events = sequelize.define('Events', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eventType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDay: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endDay: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      endTime: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      frequency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      regular: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0 
      },
      vip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0

      },
      table: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      approved: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : "pending"
      },
      password:{
        type: DataTypes.STRING,
        allowNull : true
       }
     
    });
    Events.associate=(models)=>{
      Events.hasMany(models.Tickets
     )
    }
    return Events;
  };
  