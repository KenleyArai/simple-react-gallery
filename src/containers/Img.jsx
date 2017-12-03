import React, { Component } from "react";
import PropTypes from "prop-types";

import ImgStyle from "ImgStyle";

export default class Img extends Component {
  static propTypes = {
    src: PropTypes.string,
    srcSet: PropTypes.string
  };

  static defaultProps = {
    src: "",
    srcSet: ""
  };

  render() {
    var { src, srcSet } = { ...this.props };
    if (src) return <ImgStyle src={src} />;
    return <ImgStyle srcSet={srcSet} />;
  }
}
