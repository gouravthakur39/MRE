import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Home from "../src/Home";
import Customers from "../src/Customers";
import Dashboard from "./Dashboard";

const Routes = () => {
  const {path} = useRouteMatch();
  return (
    <Switch>
      
      <Route path={`${path}/customers`}  component={Customers} />
      <Route path={path}  component={Dashboard} />
    </Switch>
  );
};

export default Routes;
