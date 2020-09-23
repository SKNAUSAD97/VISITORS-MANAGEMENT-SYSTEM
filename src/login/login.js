import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./Login.css";


const Login = () =>{
    let history = useHistory();
    const [user, setUser] =useState({
        name:"",
        mobile:"",
        email:"",
        password:""
    })

    const inputData = (event) =>{
       setUser(({...user,[event.target.name]:event.target.value}));
       console.log(user);
    }
    async function submitData(event)
    {
        event.preventDefault();
        const res=await axios.post('http://localhost:8000/api/registration',user);
        alert(res.data.success_message);
        history.push('/loginwith');
    }

  return (
    <>
      <form onSubmit={submitData}>
      <div className="body"></div>
		<div className="grad"></div>
		<div className="header">
			<div>Site<span>Random</span></div>
		</div>
		<br/>
		<div className="login">
				<input type="text" placeholder="Name" name="name" onChange={inputData} value={user.name} /><br/>
				<input type="test" placeholder="Mobile" name="mobile" onChange={inputData} value={user.mobile} /><br/>
				<input type="email" placeholder="Email" name="email" onChange={inputData} value={user.email} /><br/>
                <input type="password" placeholder="Password" name="password" onChange={inputData} value={user.password}/><br/>
                <button type="submit" className="btn btn-primary btn-block btn-large">Sign in</button>
		</div>
    </form> 
    </>
  )
}
export default Login;