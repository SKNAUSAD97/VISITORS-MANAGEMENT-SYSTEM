import React from "react";
import Login from "./login";
import Loginwith from "./Loginwith";
import Admin from "./admin";
import {Route,Switch} from "react-router-dom";

const App = () =>{
  return (
    <>   
      <Switch>
        <Route exact path="/loginwith" component={Loginwith} />
        <Route exact path="/adminpage" component={Admin} />
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  )
}
export default App;