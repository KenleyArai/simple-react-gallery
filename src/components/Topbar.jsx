import React, { Component } from "react";
import PropTypes from "prop-types";
import BarButton from "components/BarButton";
import Bar from "components/Bar";

export default class Topbar extends Component {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired
  };

  render() {
    var { clickHandler } = { ...this.props };

    return (
      <Bar>
        <BarButton onClick={() => clickHandler()}>Back</BarButton>
      </Bar>
    );
  }
}
