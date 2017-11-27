import React from "react";
import ReactDOM from "react-dom";
import "sanitize.css/sanitize.css";
import "./styles/index.css";
import Album from "containers/Album";
import registerServiceWorker from "./registerServiceWorker";

var robocar_payload = {
  title: "Robocar",
  desc: "Remote control car",
  url:
    "https://kenley.nyc3.digitaloceanspaces.com/personal-website/desktop/robocar/slideshow/",
  count: 9
};

var cdc_payload = {
  title: "Research at the CDC",
  desc: "My trip at the cdc",
  url:
    "https://kenley.nyc3.digitaloceanspaces.com/personal-website/desktop/cdc/slideshow/",
  count: 10
};

var wedding_payload = {
  title: "Wedding website",
  desc: "Ruby on rails 5 api",
  link: "https://lena.kenleyar.ai/",
  url:
    "https://kenley.nyc3.digitaloceanspaces.com/personal-website/desktop/cdc/slideshow/1.jpg"
};

var album_payloads = [robocar_payload, cdc_payload, wedding_payload];

ReactDOM.render(
  <Album galleries={album_payloads} />,
  document.getElementById("root")
);
registerServiceWorker();
