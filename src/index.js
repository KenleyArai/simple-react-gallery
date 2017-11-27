import React from "react";
import ReactDOM from "react-dom";
import "sanitize.css/sanitize.css";
import "./styles/index.css";
import Album from "containers/Album";
import registerServiceWorker from "./registerServiceWorker";

var robocar_payload = {
  url:
    "https://kenley.nyc3.digitaloceanspaces.com/personal-website/desktop/robocar/slideshow/",
  count: 9
};

var cdc_payload = {
  url:
    "https://kenley.nyc3.digitaloceanspaces.com/personal-website/desktop/cdc/slideshow/",
  count: 9
};

var album_payloads = [robocar_payload, cdc_payload];

ReactDOM.render(<Album {...album_payloads} />, document.getElementById("root"));
registerServiceWorker();
