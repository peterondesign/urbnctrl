module.exports=(sequelize, DataTypes)=>{

    const Users=sequelize.define("Users",{
    
      email:{
       type: DataTypes.STRING,
       allowNull : false
      },
      password:{
       type: DataTypes.STRING,
       allowNull : false
      },
      isAdmin:{
        type: DataTypes.BOOLEAN,
         defaultValue: false
      }
    })
     
   
    return Users
   }
   