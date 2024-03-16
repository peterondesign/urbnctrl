module.exports=(sequelize, DataTypes)=>{

 const Posts=sequelize.define("Posts",{
   title:{
    type: DataTypes.STRING,
    allowNull : false
   },
   img:{
    type: DataTypes.STRING,
    allowNull : false,
    get(){
      return this.getDataValue("img").split(";")
    },
    set(val){
      this.setDataValue("img",val.join(";"))
    }
   },
   content:{
    type: DataTypes.STRING,
    allowNull : false
   }
 })
  

 return Posts
}
