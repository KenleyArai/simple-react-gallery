import React, { Component } from "react";
import PropTypes from "prop-types";
import GalleryButton from "components/GalleryButton";

export default class Topbar extends Component {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired
  };

  render() {
    var { clickHandler } = { ...this.props };

    return (
      <div>
        <GalleryButton clickHandler={clickHandler} text={"Back"} />
      </div>
    );
  }
}
