import React, { Component } from "react";
import PropTypes from "prop-types";

import ImgStyle from "ImgStyle";

export default class Img extends Component {
  static propTypes = {
    src: PropTypes.string,
    srcSet: PropTypes.string,
    theme: PropTypes.shape({
      primary: PropTypes.string,
      secondary: PropTypes.string,
      tertiary: PropTypes.string
    })
  };

  static defaultProps = {
    src: "",
    srcSet: "",
    theme: {
      primary: "",
      secondary: "",
      tertiary: ""
    }
  };

  render() {
    var { src, srcSet, theme } = { ...this.props };
    if (src) return <ImgStyle src={src} />;
    return <ImgStyle srcSet={srcSet} />;
  }
}
