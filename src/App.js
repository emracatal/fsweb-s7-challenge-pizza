import React from "react";
import Home from "./components/Home/Home";
import OrderPizza from "./components/OrderPizza/OrderPizza";
import Success from "./components/Success/Success";
import { Switch, Route } from "react-router-dom";

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
