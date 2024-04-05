module.exports=(sequelize, DataTypes)=>{

 const Posts=sequelize.define("Posts",{
   title:{
    type: DataTypes.STRING,
    allowNull : true
   },
    category:{
      type: DataTypes.STRING, 
      allowNull : true
    },
    author:{
      type: DataTypes.STRING,
      allowNull : true
    },
   content:{
    type: DataTypes.STRING,
    allowNull : true
   }
 })
  

 return Posts
}
