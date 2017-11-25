import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const StyledButton = styled.div``;

export default class GalleryButton extends PureComponent {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    var { clickHandler, text } = { ...this.props };
    return <StyledButton onClick={() => clickHandler()}>{text}</StyledButton>;
  }
}
