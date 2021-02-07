import React from "react";


function Jumbotron(pros) {
    return(
    <div>
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{pros.heading}</h1>
          <p className="lead">{pros.subHeading}</p>
        </div>
      </div>
    </div>
    );
}

export default Jumbotron;