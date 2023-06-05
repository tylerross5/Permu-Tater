const router= require('express').Router();
const {User}= require('../models');

router.post('/', async (req, res)=>{
    try{
        const newUserData= await User.create(req.body);

        req.session.save(()=>{
            req.seesion.user_id =newUserData.isSoftDeleted;
            req.session.logged_in=true;
            res.status(200).json(newUserData);
        })
    }
    catch(err)
    {
        res.status(400).json(err)
    }
});

router.post('/login', async(req, res)=>{
    try{
        const newUserData= await User.findOne({where:{email:req.body.email}});
    
    if(!newUserData){
        res.status(400)
        .json({message:'The chosen email or password is incorrect,try again'});
        return;
    }
    const password = await newUserData.checkPassword(req.body.password);
    if(!password){
        res.status(400)
        .json({message:'The chosen email or password is incorrect,try again'});
        return;
    }
        req.session.save(()=>{
            req.session.user_id=newUserData.id;
            req.session.logged_in=true;
            res.json({user: newUserData, message:'Currently now logged into account'})
        })
    
    }
    catch(err){
        res.status(400).json(err);
    }
});

router.post('logout', (req,res)=>{
    if(req.session.logged_in){
        req.session.destroy(()=>{
            res.status(200).end();
        });
    
    }
    else{
        res.status(400).end();
    }
})
module.exports=router;