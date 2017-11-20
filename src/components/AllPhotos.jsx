import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class AllPhotos extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  };

  render() {
    var { url, count } = { ...this.props };
    return <div />;
  }
}
