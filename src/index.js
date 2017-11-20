import React from "react";
import ReactDOM from "react-dom";
import "sanitize.css/sanitize.css";
import "./styles/index.css";
import Gallery from "containers/Gallery";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Gallery />, document.getElementById("root"));
registerServiceWorker();
