import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <ul>
      <li> <Link to ={url}> Dashboard </Link> </li>
      <li> <Link to ={`${url}/customers`}> Customers </Link> </li>
      </ul>
    </div>
  );
};

export default Sidebar;
