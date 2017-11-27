import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Album extends PureComponent {
  static propTypes = {
    gallerys: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired
      })
    )
  };

  render() {
    var { gallerys } = { ...this.props };

    return <div />;
  }
}
