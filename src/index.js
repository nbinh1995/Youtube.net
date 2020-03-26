import React from "react";
import ReactDOM from "react-dom";
import "./index_style.scss";
import App from "./Containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
