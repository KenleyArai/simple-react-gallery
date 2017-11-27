import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "components/Button";

const Card = styled.div``;

const CardPhoto = styled.img`
  width: 16rem;
  height: auto;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const CardTitle = styled.div``;

const CardDesc = styled.div``;

const CardButton = Button.extend``;

export default class AlbumCard extends Component {
  static propTypes = {
    url: PropTypes.string,
    desc: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string.isRequired,
    count: PropTypes.number,
    clickHandler: PropTypes.func
  };

  get_temp_header(url) {
    return url + "0.jpg";
  }

  render() {
    var { url, desc, link, title, count, clickHandler } = { ...this.props };

    if (url) {
      return (
        <Card>
          <CardPhoto srcSet={this.get_temp_header(url)} />
          <CardTitle>{title}</CardTitle>
          <CardDesc>{desc}</CardDesc>
          <CardButton onClick={() => clickHandler(url, count)}>
            Open Gallery
          </CardButton>
        </Card>
      );
    }
  }
}
