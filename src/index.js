import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
