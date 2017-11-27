import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div``;

const CardPhoto = styled.img`
  width: 16rem;
  height: auto;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const CardTitle = styled.div``;

const CardDesc = styled.div``;

const CardLink = styled.a``;

export default class AlbumCard extends Component {
  static propTypes = {
    url: PropTypes.string,
    desc: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string.isRequired,
    count: PropTypes.number
  };

  get_temp_header(url) {
    return url + "0.jpg";
  }

  render() {
    var { url, desc, link, title, count } = { ...this.props };
    return (
      <Card>
        <CardPhoto srcSet={this.get_temp_header(url)} />
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
      </Card>
    );
  }
}
