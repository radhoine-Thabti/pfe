// creation de Schema pour la liste de Products //

const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const productsSchema=new Schema({

    name :{ type : String} , photo :{type : String  } , price :{type : String} ,description :{type : String} 

});

module.exports = products = mongoose.model('products',productsSchema);