import React from "react";
import ReactDom from "react-dom";
import App from "./App";
// import Loginwith from "./Loginwith";
import {BrowserRouter,Switch,Route} from "react-router-dom";

ReactDom.render(
    <BrowserRouter>
        <App/>
        {/* <Switch>
            <Route exact path="/login" component={Loginwith}></Route>
        </Switch> */}
    </BrowserRouter>,
  document.getElementById('root')
);