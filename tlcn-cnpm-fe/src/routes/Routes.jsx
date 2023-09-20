import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";









const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      

    </Switch>
  );
};

export default Routes;
