import React from "react";
import { BrowserRouter as Router,Routes, Link, Route } from "react-router-dom";
import Users from "./Users";

function Routing() {
  const users = [
    { id: 1, name: "Pankaj" },
    { id: 2, name: "Tarush" },
    { id: 3, name: "Aashu" },
    { id: 4, name: "Shiv" },
  ];

  return (
    <div>

<h1>We are implementing dynamic routhing here</h1>
      <div>
        {users.map((user) => (
          <div>
            {/*  the page will not render again if we click on any link */}
            {/* and the url will also change dynamically as we have assigned in the to attribute of the LINK tag below */}
            <Link to={"/user/" + user.name}>
              <h1>{user.name}</h1>
            </Link>
            </div>          
          
        ))}
        <Routes>
        <Route path="/user/:name" element={<Users/>}>
            
            </Route>
        </Routes>
       
      </div>
    
    </div>
   
  );
}

export default Routing;
