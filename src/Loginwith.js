import React from "react";
import "./css/loginwith.css";
import axios from "axios";
import {useState} from "react";
import {useHistory} from "react-router-dom";

const Loginwith = () =>{
    let history=useHistory();
    const [user, setUser] = useState({
        email:"",
        password:""
    });
    const inputData = (event) =>{
        setUser(({...user,[event.target.name]:event.target.value}))
        console.log(user);
    }
    async function submitData(event)
    {
        event.preventDefault();
        const res = await axios.post('http://localhost:8000/api/loginuser',user);
        alert(res.data.message);
        if(res.data.message==="You are successfully logged in")
        {
            history.push('/adminpage');
        }
    }
    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={submitData}>
                    <input type="email" name="email" placeholder="Email" onChange={inputData}/>
                    <input type="password" name="password" placeholder="Password" onChange={inputData} />
                    <button type="submit" className="btn btn-primary btn-block btn-large">Sign in</button>
                </form>
            </div>
        </>
    )
}
export default Loginwith;