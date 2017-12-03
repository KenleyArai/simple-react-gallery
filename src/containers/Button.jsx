import React, { Component } from "react";
import PropTypes from "prop-types";

import ButtonStyle from "styled/ButtonStyle";

export default class Button extends Component {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
  };

  static defaultProps = {
    active: false
  };

  render() {
    var { clickHandler, children, active } = { ...this.props };
    return (
      <ButtonStyle onClick={() => clickHandler()} active={active}>
        {children}
      </ButtonStyle>
    );
  }
}
