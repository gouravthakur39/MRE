import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Hey, this is landing page!!!</h1>
     <Link to="/home"> <h3>Login</h3> </Link>
    </div>

  );
};

export default Landing;
