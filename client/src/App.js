import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Pay from "./components/Pay";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
          <Switch>
              <Route  path="/login" component={Login}/>
              <Route  path="/register" component={Register}/>
              <Route  path="/home" component={Home}/>
              <Route  path="/pay" component={Pay}/>
              <Redirect exact from="/" to="/login" />
          </Switch>
      </div>
    </Router>
  );
}
