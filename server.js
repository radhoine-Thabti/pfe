 // creation de mon serveur express //

             // Begin server //
 
 const express = require('express');
const dbconnect = require('./config/dbconnect.js');

 require ('dotenv').config();
 const app = express();
 const cors =require("cors");

 dbconnect();
 const port =process.env.PORT;
 app.listen (port, (err)=>err?console.log(err):console.log(`server is runnig on ${port}`));
           
             // Les midelwares pour les CRUDS  //
app.use(cors());     
app.use(express.json());
app.use('/users',require('./routes/users.js'));
app.use('/products',require('./routes/products.js'));
app.use('/orders',require('./routes/orders.js'));





             // End server //


