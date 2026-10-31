import "bootstrap/dist/css/bootstrap.min.css";
let express=require('express');
let cors=require('cors');
let app=express();
let mongoose=require('mongoose');
let emproutes=require('./routes/employee_route');
let hrroutes=require('./routes/hr_route');
app.use(cors());
mongoose.connect("mongodb://localhost:27017/hrmanagement")
  .then(()=>console.log("db connected successfully"))
  .catch((err)=>console.log(err))

app.use(express.json()); // used to collect input from UI as JSON data

app.use("/api/employee",emproutes);
app.use("/api/hr",hrroutes);
//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})