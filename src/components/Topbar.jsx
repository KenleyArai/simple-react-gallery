import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const TopBackButton = styled.button``;

export default class Topbar extends Component {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired
  };

  render() {
    var { clickHandler } = { ...this.props };

    return (
      <div>
        <TopBackButton onClick={() => clickHandler()} />
      </div>
    );
  }
}
