let express = require('express');
let router = express.Router();
let {users} = require('../models/users');

// localhost:3000/api/hr/viewemp
router.get("/viewemp",  async (req, res) => {
    let result=await users.find();
    res.send(result);
});

router.post("/assign-task", (req, res) => {
    res.send("assign task route called");
});

router.delete("/deleteemp/:id",async (req, res) => {
    let result=await users.findByIdAndDelete(req.params.id);
    if(result){
        res.send("record deleted succesfully");
    }
});

router.get("/viewtask", (req, res) => {
    res.send("view task route called"); 
});

module.exports = router;