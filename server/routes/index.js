const express=require('express');
const db=require('../db');

const router=express.Router();
const users=[
    { email: 'rajawadhwani71@gmail.com'},
    {password: '12345678'} ,
      

];

router.get('/student/all', async(req,res,next)=>{
    try{
        let results=await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});


router.get('/student/:cms', async(req,res,next)=>{
    try{
        let results=await db.one(req.params.cms);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.post('/register', async(req,res)=>{
   res.status(200).send(users);
});
router.post('/register',(req,res)=>{
    const user=req.body;
    users.push(user);
    res.status(201).send('Created User')

})
router.post('/api/courses',(req,res)=>{
 const schema={
     name: joi.string().min(3).required()
 };
 if(!req.body.name || req.body.name.length<3){
     res.status(400).send('Name is required and should be minimum 3 character')
     return;

 }
 const course={
     id: couses.length+1,
     name: req.body.name
 };
 courses.push(course);
 res.send(course);
});
module.exports=router;
