import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../src/Home";
import Customers from "../src/Customers";
import Dashboard from "./Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Dashboard} />
      <Route path="/customers" exact component={Customers} />
    </Switch>
  );
};

export default Routes;
