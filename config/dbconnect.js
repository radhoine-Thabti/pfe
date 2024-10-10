// ici la connexion au Base de donnés //

const mongoose =require('mongoose');

const dbconnect = async()=>{
       try {
   await mongoose.connect(process.env.DBURL);
    console.log("Mongo DB connected");
       } catch (error) {
    console.log(error);
       }
}
module.exports=dbconnect;  //ici on exporte la fonction pour l'utiliser dans les autres