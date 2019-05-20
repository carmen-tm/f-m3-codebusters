import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CardGenerator from './CardGenerator';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <CardGenerator />
  </HashRouter>,
  document.getElementById("root")
);
