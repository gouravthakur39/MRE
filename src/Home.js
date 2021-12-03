import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Main from "./Main";
import Sidebar from "./Sidebar";

import './Home.css';

const Home = () => {
  return (
    <Fragment>
      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Main />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
