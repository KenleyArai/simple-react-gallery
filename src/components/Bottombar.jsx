import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class BottomBar extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    stop: PropTypes.number.isRequired,
    position: PropTypes.isRequired
  };

  render() {
    var { url, start, stop, position } = { ...this.props };
    return <div />;
  }
}
