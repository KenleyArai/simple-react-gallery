import React, { Component } from "react";
import PropTypes from "prop-types";

import ImgStyle from "ImgStyle";

export default class Img extends Component {
  static propTypes = {
    src: PropTypes.string,
    srcSet: PropTypes.string
  };
  render() {
    var { src, srcSet } = { ...this.props };
    if (src != undefined) return <ImgStyle src={src} />;
    return <ImgStyle srcSet={srcSet} />;
  }
}
