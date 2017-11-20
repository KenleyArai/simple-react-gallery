import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Gallery extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  };

  render() {
    var { url, count } = { ...this.props };
    return <div />;
  }
}
