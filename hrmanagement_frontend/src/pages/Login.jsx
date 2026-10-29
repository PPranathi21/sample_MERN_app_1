import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login()
{
   let [emailid,setEmailid]=useState("")
   let [password,setPassword]=useState("")
   let navigate=useNavigate();
   let handleLogin=async(event)=>{
    event.preventDefault();
    console.log(emailid);
    console.log(password);
    if(emailid=="admin@gmail.com" && password=="admin"){
        navigate("/adminhome");
    }else{
        let req=await fetch("http://localhost:3000/api/employee/login",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({emailid,password})
            }
        );
        let res=await req.json()
        console.log(res)
    }
   }
   return(
    <div>
         <form onSubmit={handleLogin}>
    <input type="email" value={emailid} 
      onChange={(event)=>setEmailid(event.target.value)}
    placeholder="Enter your emailid"></input><br/>
    
    <input type="password" value={password}
     onChange={(event)=>setPassword(event.target.value)}
     placeholder="Enter your password"></input><br/>
    <button type="submit">Login</button>
         </form>
    </div>
   )
}
   
   export default Login