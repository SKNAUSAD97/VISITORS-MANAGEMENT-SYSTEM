import React from "react";
import {Switch, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Table from "./Tables";
import Visitors from "./Visitors";
import AddVisitors from "./AddVisitors";
import EditVisitors from "./EditVisitors";

const Content =()=>{
    return (
        <>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/tables" component={Table}/>
                <Route exact path="/visitors" component={Visitors}/>
                <Route exact path="/addvisitors" component={AddVisitors}/>
                <Route exact path="/editvisitors/:id" component={EditVisitors}/>
            </Switch>
        </>
    )
}
export default Content;