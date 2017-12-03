import React, { Component } from "react";
import PropTypes from "prop-types";

import Box from "components/Box";
import LazyImg from "components/LazyImg";

export default class Card extends Component {
  static propTypes = {
    url: PropTypes.string,
    desc: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string
  };

  render() {
    var { url, desc, title, link } = { ...this.props };
    return (
      <Box>
        <LazyImg srcSet={url} />
      </Box>
    );
  }
}
