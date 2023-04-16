import React from "react";

function counter() {
  return (
    <div>
      <h1>This is our counter component</h1>
      <div className="mx-auto" style={{ width: 200 }}>
        <button type="button" className="btn btn-primary">
          Increment
        </button>
      
        <br />

          <div className="input-group mb-3">
            <input type="text" className="form-control" />
          </div>

        <button type="button" className="btn btn-primary">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default counter;
