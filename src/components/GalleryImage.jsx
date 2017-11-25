import React, { Component } from "react";
import PropTypes from "prop-types";

export default class GalleryImage extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  render() {
    return <img srcSet={this.props.url} />;
  }
}
