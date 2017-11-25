import React, { Component } from "react";
import PropTypes from "prop-types";

import AllPhotos from "components/AllPhotos";
import SinglePhoto from "components/SinglePhoto";

import "styles/image.css";

export default class Gallery extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    // Show state toggels between <Allphotos> and <SinglePhtoto>
    // Position is used only for <SinglePhoto>
    this.state = {
      show_state: undefined,
      position: undefined,
      _loaded: false
    };

    this.go_to_all_handler = this.go_to_all_handler.bind(this);
    this.go_to_single_handler = this.go_to_single_handler.bind(this);
    this.state_helper = this.state_helper.bind(this);
  }

  componentDidMount() {
    this.setState({ show_state: "All", position: -1, _loaded: true });
  }

  go_to_all_handler() {
    this.setState({ show_state: "All", position: -1 });
  }

  go_to_single_handler(p) {
    this.setState({ show_state: "Single", position: p });
  }

  state_helper(url, count) {
    if (this.state.show_state === "All") {
      return (
        <AllPhotos
          clickHandler={this.go_to_single_handler}
          url={url}
          count={count}
        />
      );
    }
    return (
      <SinglePhoto
        photoHandler={this.go_to_single_handler}
        clickHandler={this.go_to_all_handler}
        url={url}
        position={this.state.position}
        count={count}
      />
    );
  }

  render() {
    var { url, count } = { ...this.props };

    return this.state._loaded ? (
      this.state_helper(url, count)
    ) : (
      <span>Loading...</span>
    );
  }
}
