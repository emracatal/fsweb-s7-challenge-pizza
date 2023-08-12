import React from "react";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import Success from "./components/Success";
import { Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/OrderPizza" exact>
          <OrderPizza />
        </Route>
        <Route path="/Success" exact>
          <Success />
        </Route>
      </Switch>
    </>
  );
};
export default App;
