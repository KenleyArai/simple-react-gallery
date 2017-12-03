import React, { Component } from "react";
import PropTypes from "prop-types";

import ButtonStyle from "styled/ButtonStyle";

export default class Button extends Component {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
  };

  render() {
    var { clickHandler, children } = { ...this.props };
    return <ButtonStyle>{children}</ButtonStyle>;
  }
}
