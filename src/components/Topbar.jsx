import React, { Component } from "react";
import PropTypes from "prop-types";
import BarButton from "components/BarButton";
import Bar from "components/Bar";

const TopBarStyled = Bar.extend`
  align-items: center;
  padding-left: 4rem;
  height: 5rem;
  width: 100%;
  justify-content: left;
`;

export default class Topbar extends Component {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired
  };

  render() {
    var { clickHandler } = { ...this.props };

    return (
      <TopBarStyled>
        <BarButton onClick={() => clickHandler()}>Back</BarButton>
      </TopBarStyled>
    );
  }
}
