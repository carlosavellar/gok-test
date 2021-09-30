/** @format */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Cadastro from "./components/cadastro/Cadastro";
import Repositories from "./components/repositories/Repositories";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Cadastro} exact />
        <Route path="/repositorios">
          <Repositories />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
