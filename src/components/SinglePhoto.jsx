import React, { Component } from "react";
import PropTypes from "prop-types";

import Topbar from "components/Topbar";
import Bottombar from "components/Bottombar";

export default class SinglePhoto extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    clickHandler: PropTypes.func.isRequired
  };

  render() {
    var { url, position, count, clickHandler } = { ...this.props };

    return (
      <div>
        <Topbar clickHandler={clickHandler} />
        <img srcSet={url + position + ".jpg"} />
        <Bottombar />
      </div>
    );
  }
}
