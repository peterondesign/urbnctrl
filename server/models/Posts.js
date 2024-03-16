module.exports=(sequelize, DataTypes)=>{

 const Posts=sequelize.define("Posts",{
   title:{
    type: DataTypes.STRING,
    allowNull : false
   },
   img:{
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull : false
   },
   content:{
    type: DataTypes.STRING,
    allowNull : false
   }
 })
  

 return Posts
}
