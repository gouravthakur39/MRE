import {React, Fragment} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import Customers from "./Customers";

function App() {
  return (
   <Fragment>
     <BrowserRouter>
          <Switch>
          <Route  path="/home" component={Home} />
            <Route  path="/" component={Landing} />
            
            {/* <Route exact path="/customers" component={Customers} /> */}
          </Switch>
        </BrowserRouter>
   </Fragment>
  );
}

export default App;
