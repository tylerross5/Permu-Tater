 const router = require('express').Router;
 const { User } = require('../models');
 const withAuth= require('../utils/authentication');

 router.get('/profile', withAuth, async(req, res)=>{
    try{
        const userinfo =await User.findByPk(req.session.user_id,{
            attributes:{ exclude:['password']},
        });
        const user= userinfo.get({plain:true});

        res.render('profile',{
            ...user,
            logged_in:true
        });
    } 
    catch(err){
        res.status(400).json(err)
    }
 });
 router.get('/login', (req, res)=>{ 
    if(req.session.logged_in){
        res.redirect('/profile');
        return;
    }
    res.render('login')

 });
 module.exports=router ;