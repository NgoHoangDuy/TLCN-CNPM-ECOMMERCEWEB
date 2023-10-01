import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";



import RegisterCode from "../pages/RegisterCode";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RedirectRoutes from "./redirect/RedirectRoutes";


const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      
       {/* Login, Register, RegisterCode, Phone*/}
       <Route path="/register" exact component={Register} />
      {/* <Route path="/register*" exact component={Register} /> */}
      <Route path="/registerCode" exact component={RegisterCode} />
      <Route path="/login" exact component={Login} />
      {/* Redirect */}
      <Route path="/redirect*" exact>
          <RedirectRoutes />
      </Route>
    </Switch>
  );
};

export default Routes;
