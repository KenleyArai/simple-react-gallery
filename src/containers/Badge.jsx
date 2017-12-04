import React, { Component } from "react";
import PropTypes from "prop-types";

import BadgeStyle from "styled/BadgeStyle";

export default class Badge extends Component {
  static propTypes = {
    type: PropTypes.string,
    url: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = { type: undefined, url: undefined };
  }

  componentWillMount() {
    this.setState({ type: this.props.type, url: this.props.url });
  }

  render() {
    var { type, url } = { ...this.props };
    switch (type) {
      case "facebook":
        return <BadgeStyle facebook />;
      case "linkedin":
        return <BadgeStyle linkedin />;
      default:
        return <BadgeStyle blank />;
    }
  }
}
