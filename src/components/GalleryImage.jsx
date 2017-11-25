import React, { Component } from "react";
import PropTypes from "prop-types";

export default class GalleryImage extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    clickHandler: PropTypes.func
  };

  render() {
    var { url, position, clickHandler } = { ...this.props };
    console.log(position);
    return <img onClick={() => clickHandler(position)} srcSet={url} />;
  }
}
