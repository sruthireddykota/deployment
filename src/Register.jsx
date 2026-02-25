import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register()
{
    const nav=useNavigate()
    const [data,setdata]=useState(
        {
        username:"",
        email:"",
        psw:""

}
)
const change=(e)=>
{

    setdata({...data,[e.target.name]:e.target.value})

}
const submit =async()=>
{
    console.log("Before api")
    const res=await axios.post("http://localhost:8080/reg",data)
    alert(res.data)
}

return(
    <>
    <h2></h2>
    <input onChange={change} name ="username"placeholder="Create Useranme" /><br/>
    <input onChange={change} name ="email"placeholder="Enter email" /><br/>
    <input onChange={change} name ="password"placeholder="Enter Password" /><br/>
    <button onClick={submit}>Register</button>
    </>
)

}
export default Register