import React, { Component } from "react";
import PropTypes from "prop-types";

import AllPhotos from "components/AllPhotos";
import SinglePhoto from "components/SinglePhoto";

export default class Gallery extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    // Show state toggels between <Allphotos> and <SinglePhtoto>
    // Position is used only for <SinglePhoto>
    this.state = { show_state: undefined, position: undefined };
  }

  componentDidMount() {
    this.setState({ show_state: "All", position: -1 });
  }

  state_helper(url, count) {
    if (this.state.show_state === "All") {
      return <AllPhotos url={url} count={count} />;
    }
    return (
      <SinglePhoto url={url} position={this.state.position} count={count} />
    );
  }

  render() {
    var { url, count } = { ...this.props };

    return this.state_helper(url, count);
  }
}
