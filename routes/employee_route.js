let express=require('express');
let router=express.Router()
let {users} = require('../models/users');
let bcrypt=require('bcrypt');

router.post("/register",async (req,res)=>{
    let data=req.body;
    data.password=await bcrypt.hash(data.password,10);
    let newuser=new users(data);
    let result= await newuser.save();
    res.send(result);
})

router.post("/login",async (req,res)=>{
    let data=req.body;
    let emailcheck=await users.findOne({emailid:data.emailid});
    if(emailcheck){
        let passcheck=await bcrypt.compare(data.password,emailcheck.password);
        if(passcheck){
            res.send("login succesfull");
        }else{
            res.send("wrong password");
        }
    }else{
        res.send("user not found");
    }
    res.send("login router called");
})


router.get("/viewtask", (req, res) => {
    res.send("view task route called");
});

router.patch("/update-profile", (req, res) => {
    res.send("update profile route called");
});

module.exports = router;