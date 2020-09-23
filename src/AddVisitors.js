import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const AddVisitors =()=>{
    let history=useHistory();
    const [user, setUser]=useState({
        name:"",
        mobile:"",
        address:"",
        whome_to:"",
        room_no:""
    });

    const inputData = (event) =>{
        setUser(({...user,[event.target.name]:event.target.value}))
        console.log(user);
    }
    async function submitData(event)
    {
        event.preventDefault();
        const res= await axios.post('http://webhostsais.in/visitors/public/api/addvisitor',user);
        document.getElementById('info').innerHTML= res.data.message;
        // history.push('/visitors');
    }
    return (
        <>
            <form onSubmit={submitData}>
                <div className="ml-5" style={{width:"600px"}}>
                <div className="form-group"><br/>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"  onChange={inputData} name="name"/>
                </div>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Mobile"  onChange={inputData} name="mobile"/>
                </div>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Address"  onChange={inputData} name="address" />
                </div>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Whome to Visit"  onChange={inputData} name="whome_to" />
                </div>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Room No"  onChange={inputData} name="room_no" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <div id="info" className="ml-5 pt-5"></div>
        </>
    )
}
export default AddVisitors;