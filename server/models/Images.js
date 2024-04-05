module.exports=(sequelize, DataTypes)=>{

    const Images=sequelize.define("Images",{
     
      img:{
       type: DataTypes.STRING,
       allowNull : false,
       get(){
         return this.getDataValue("img").split(";")
       },
       set(val){
         this.setDataValue("img",val.join(";"))
       }
      }
    
    })
     
   
    return Images 
   }
   