import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const GImage = styled.img`
  flex: auto;
  height: auto;
  min-width: 10rem;

  margin: 0 0.25rem 0.25rem 0;

  &:nth-child(4n + 1) {
    width: 16rem;
  }
  &:nth-child(4n + 2) {
    width: 20rem;
  }
  &:nth-child(4n + 3) {
    width: 11rem;
  }
  &:nth-child(4n + 4) {
    width: 24rem;
  }
`;

export default class GalleryImage extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    clickHandler: PropTypes.func
  };

  render() {
    var { url, position, clickHandler } = { ...this.props };

    return <GImage onClick={() => clickHandler(position)} srcSet={url} />;
  }
}
