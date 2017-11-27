import React from "react";
import ReactDOM from "react-dom";
import "sanitize.css/sanitize.css";
import "./styles/index.css";
import Album from "containers/Album";
import registerServiceWorker from "./registerServiceWorker";

var robocar_payload = {
  title: "Robocar",
  desc: "Remote control car",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/robocar/",
  count: 9
};

var sensor_payload = {
  title: "Mosquito Classifier",
  desc: "My trip at the cdc",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/sensor/",
  count: 28
};

var wedding_payload = {
  title: "Wedding website",
  desc: "Ruby on rails 5 api",
  link: "http://lena.kenleyar.ai/",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/wedding/0.jpg"
};

var serial_payload = {
  title: "Serial Face",
  desc: "box that unlocks using image processing",
  link: "http://lena.kenleyar.ai/",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/serial-face/0.jpg"
};

var album_payloads = [
  robocar_payload,
  sensor_payload,
  wedding_payload,
  serial_payload
];

ReactDOM.render(
  <Album title={"test gallery"} galleries={album_payloads} />,
  document.getElementById("root")
);
registerServiceWorker();
