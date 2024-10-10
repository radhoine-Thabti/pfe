 // ici on vas creer les routes por users  //

 const express = require('express');
 const products =require('../models/products')

       // get all products //

const productsRouter = express.Router();


productsRouter.get('/all', async(req,res)=>{
    try {
        const result = await products.find();
        res.send ({productsList :result,msg: 'voici la liste produits'});

        } catch (error) {
        console.log(error);
       }
    });

        // get user by ID //

        productsRouter.get('/:id', async(req,res)=>{
            try {
                const result = await products.findById({_id:req.params.id}); // params car l'id sera passer en manuelle :/ id
                res.send({productsByID : result ,msg :' Voici le produit avec cette ID'})
                
            } catch (error) {
                console.log(error)
            }
        })
        
        // add new products //

        productsRouter.post('/add', async(req,res)=>{
            try {
                const newProducts = new products(req.body); // --  pour recuperer les data from the users schema //
                const result = await newProducts.save();
                res.send({msg: 'products added',result});
                
        
                } catch (error) {
                console.log(error);
               }
            });
        
        //delete user //

        productsRouter.delete('/:id', async(req,res)=>{

        try {
            const result = await products.findByIdAndDelete({_id:req.params.id});
            res.send({productsDeleted : result, msg:'products successfuly deleated !'});
        } catch (error) {
            console.log(error)
        }
        });
        
        // Update user //

        productsRouter.put('/:id', async(req,res)=>{

            try {
                const result = await products.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
                res.send({productsUpdated : result, msg:'products updated successfuly !'});
            } catch (error) {
                console.log(error)
            }
            });

module.exports =productsRouter