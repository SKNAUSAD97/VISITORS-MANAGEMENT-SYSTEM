import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";


const Visitors =()=>{
    const [visitor, setVisitor] = useState([]);
    useEffect (()=>{
        loadUser();
    },[]);

    async function loadUser()
    {
        var res = await axios.get('http://webhostsais.in/visitors/public/api/visitorsdetails');
        setVisitor(res.data)
        console.log(res.data);
    }
    async function deleteuser(id)
    {
        var res = await axios.delete(`http://webhostsais.in/visitors/public/api/deleteuser/${id}`);
        alert(res.data.message);
        loadUser();
    }
    return (
        <>
            <div id="content">

                <div className="container-fluid">


                <h1 className="h3 mb-2 text-gray-800"></h1>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Visitors INformation</h6>
                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Whome to visit</th>
                            <th>Room No</th>
                            <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitor.map((visit,index)=>{
                                return (
                                    <>
                                        <tr>
                                        <td>{index+1}</td>
                                        <td>{visit.created_at}</td>
                                        <td>{visit.name}</td>
                                        <td>{visit.mobile}</td>
                                        <td>{visit.address}</td>
                                        <td>{visit.whome_to}</td>
                                        <td>{visit.room_no}</td>
                                        <td>
                                            <Link to={`/editvisitors/${visit.id}`} className="btn btn-info mr-2"><i class="fas fa-edit"></i></Link>
                                            <Link onClick={()=>deleteuser(visit.id)} className="btn btn-danger"><i class="fas fa-trash-alt"></i></Link>
                                        </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>

                </div>


                </div>
        </>
    )
}
export default Visitors;

