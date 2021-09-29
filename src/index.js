/** @format */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./assets/theme";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Cadastro from "./components/cadastro/";
import Repositorios from "./components/respositorios";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Cadastro} />
        <Route path="/respositorios" component={Repositorios} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
