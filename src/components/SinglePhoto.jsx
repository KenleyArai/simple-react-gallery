import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SinglePhoto extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired
  };

  render() {
    var { url, position, start, end } = { ...this.props };

    return <div>Test</div>;
  }
}
