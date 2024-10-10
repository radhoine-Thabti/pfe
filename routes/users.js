 // ici on vas creer les routes por users  //

 const express = require('express');
 const users =require('../models/users')

       // get all users //

const userRouter = express.Router();


userRouter.get('/all', async(req,res)=>{
    try {
        const result = await users.find();
        res.send ({usersList :result,msg: 'voici la liste users'});

        } catch (error) {
        console.log(error);
       }
    });

        // get user by ID //

        userRouter.get('/:id', async(req,res)=>{
            try {
                const result = await users.findById({_id:req.params.id}); // params car l'id sera passer en manuelle :/ id
                res.send({userByID : result ,msg :' Voici le user avec cette ID'})
                
            } catch (error) {
                console.log(error)
            }
        })
        
        // add new user //

        userRouter.post('/add', async(req,res)=>{
            try {
                const newUser = new users(req.body); // --  pour recuperer les data from the users schema //
                const result = await newUser.save();
                res.send({msg: 'user added',result});
                
        
                } catch (error) {
                console.log(error);
               }
            });
        
        //delete user //

        userRouter.delete('/:id', async(req,res)=>{

        try {
            const result = await users.findByIdAndDelete({_id:req.params.id});
            res.send({userDeleted : result, msg:'user successfuly deleated !'});
        } catch (error) {
            console.log(error)
        }
        });
        
        // Update user //

        userRouter.put('/:id', async(req,res)=>{

            try {
                const result = await users.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
                res.send({userUpdated : result, msg:'user updated successfuly !'});
            } catch (error) {
                console.log(error)
            }
            });

module.exports =userRouter