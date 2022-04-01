const { request } = require('express');
const User=require('../model/user.model');
const caategory=require('../model/category.model');
exports.signup=(request,response)=>{
    
    let username=request.body.username;
    let email=request.body.email;
    let password=request.body.password;
    let mobile=request.body.mobile;
    console.log(request.body);
    User.create({
        username:username,
        email:email,
        password:password,
        mobile:mobile
    }).then(result=>{
        console.log(result);
        return response.status(201).json(result);
    }).catch(err=>{
        console.log(err);
    });
}

exports.signin=(request,response)=>{
    
    User.findOne({
        email:request.body.email,
        password:request.body.password
    })
    .then(result=>{
        console.log(result)
       return response.status(200).json(result);
     }).catch(err=>{
        console.log(err);
        return response.status(500).json({message:"Oops!something went wrong"});

    });
}

exports.addcategory=(request,response)=>{
    user.findOne({
        name:request.body.name,
        image:request.body.image
    })
    .then(result=>{
        console.log(result)
        return response.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        return response.status(500).json({message:"Somethin went wrong"})
    })
}