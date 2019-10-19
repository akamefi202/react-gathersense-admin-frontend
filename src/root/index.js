import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import Prong from "./Prong";

const root = () =>
  <div className="body"> 
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Prong}/>
        <Route path="/Login" component={Prong}/>
      </Switch>
    </BrowserRouter>
  </div>


export default root;
