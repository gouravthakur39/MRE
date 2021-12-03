import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul>
      <li> <Link to ="/home"> Dashboard </Link> </li>
      <li> <Link to ="/customers"> Customers </Link> </li>
      </ul>
    </div>
  );
};

export default Sidebar;
