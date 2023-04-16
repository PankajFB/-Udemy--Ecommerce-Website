import React from "react";
import { useParams } from "react-router-dom";

function Users() {
  const params = useParams();
  const { name } = params;
  console.log(name);

  return (
    <div>
      <div className="container">
        <div className="box">
          <span />
          <div className="content">
            <h2>{name}</h2>
            <p>Email : pk497243@gmail.com</p>
            <p>Best Buy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
