let express=require('express');
let app=express();
let mongoose=require('mongoose');
let emproutes= require('./routes/employee_route');
mongoose.connect("mongodb://localhost:27017/hrmanagement").then(()=>console.log("db connected successfully"))
.catch((err)=>console.log(err))

app.use(express.json());//used to collect input from UIas JSON data

app.use("/api/emp",emproutes);
app.listen(3000,()=>{
  
    console.log("server listening on port 3000");
})