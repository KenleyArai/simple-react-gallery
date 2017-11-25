import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SinglePhoto extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
  };

  render() {
    var { url, position, count } = { ...this.props };

    return (
      <div>
        <img srcSet={url} />
      </div>
    );
  }
}
