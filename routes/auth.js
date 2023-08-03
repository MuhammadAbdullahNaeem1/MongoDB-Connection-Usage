const express = require('express');
// const mongoose = require('mongoose');
// const { Schema } = mongoose;

const User = require('../models/User');
const router = express.Router();
const {body, validationResult } = require('express-validator');
//Create a User using :POST "api/auth/"  No Auth required
router.post('/',[
    body('name','Write correct name').isLength({min:3}),
body('email','Write correct email').isEmail(),
body('password','Password must be of 5 characters').isLength({min:5}),

],(req,res)=>{
    const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
User.create({
    name:req.body.name,
    password: req.body.password,
    email: req.body.email,

}).then(user=>res.json(user))
.catch (err=>console.log(err) )
res.json({error:'Please enter a distinct email',message:err.message})})
module.exports = router;