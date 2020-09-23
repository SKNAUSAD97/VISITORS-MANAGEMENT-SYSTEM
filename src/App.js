import React from "react";
import Sidebar from "./Sidebar";
import Mainpanel from "./Mainpanel";


const App =()=>{
    return (
        <>
            <body id="page-top">
               <div id="wrapper">
                <Sidebar/>
                <Mainpanel/>
               </div>
            </body>
        </>
    )
}
export default App;