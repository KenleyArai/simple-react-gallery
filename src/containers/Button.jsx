import React, { Component } from "react";
import PropTypes from "prop-types";

import ButtonStyle from "styled/ButtonStyle";

import theme from "../theme";

export default class Button extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    children: PropTypes.string,
    theme: PropTypes.shape({
      primary: PropTypes.string,
      secondary: PropTypes.string,
      tertiary: PropTypes.string
    })
  };

  static defaultProps = {
    active: false,
    theme: { ...theme },
    children: "Click Me!"
  };

  render() {
    var { clickHandler, children, active, theme } = { ...this.props };
    return (
      <ButtonStyle theme={theme} onClick={() => clickHandler()} active={active}>
        {children}
      </ButtonStyle>
    );
  }
}
