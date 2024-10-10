// creation de Schema pour la liste de Users //

const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({

    name :{ type : String} , photo :{type : String  } , password :{type : String} 

});
module.exports = users = mongoose.model('users',userSchema);
