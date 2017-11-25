import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class BottomBar extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    photoHandler: PropTypes.func.isRequired,
    position: PropTypes.number.isRequired
  };

  render() {
    var { url, count, photoHandler, position } = { ...this.props };
    return <div />;
  }
}
