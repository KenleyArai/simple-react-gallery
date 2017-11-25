import React from "react";
import ReactDOM from "react-dom";
import "sanitize.css/sanitize.css";
import "./styles/index.css";
import Gallery from "containers/Gallery";
import registerServiceWorker from "./registerServiceWorker";

var payload = {
  url:
    "https://kenley.nyc3.digitaloceanspaces.com/personal-website/desktop/robocar/slideshow/",
  count: 9
};

ReactDOM.render(<Gallery {...payload} />, document.getElementById("root"));
registerServiceWorker();
