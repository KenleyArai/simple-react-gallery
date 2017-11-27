import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "components/Button";

const Card = styled.div`
  border-radius: 2px;
  transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  width: 16rem;
`;

const CardPhoto = styled.img`
  width: 16rem;
  height: auto;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const CardTitle = styled.div``;

const CardDesc = styled.div``;

const CardButton = Button.extend``;

const CardLink = styled.a``;

export default class AlbumCard extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    desc: PropTypes.string,
    title: PropTypes.string.isRequired,
    count: PropTypes.number,
    clickHandler: PropTypes.func
  };

  get_temp_header(url) {
    return url + "0.jpg";
  }

  render() {
    var { url, link, desc, title, count, clickHandler } = { ...this.props };

    if (count) {
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
    return (
      <Card>
        <CardPhoto srcSet={url} />
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
        <CardLink href={link}>Go to Site</CardLink>
      </Card>
    );
  }
}
