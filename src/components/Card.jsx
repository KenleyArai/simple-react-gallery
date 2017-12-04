import React, { Component } from "react";
import PropTypes from "prop-types";

import Box from "components/Box";
import LazyImg from "components/LazyImg";
import Header from "components/Header";
import Content from "components/Content";
import Button from "containers/Button";

export default class Card extends Component {
  static propTypes = {
    url: PropTypes.string,
    desc: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    clickHandler: PropTypes.func,
    social_payload: PropTypes.shape({
      type: PropTypes.oneOf(["github", "linkedin"]).isRequired,
      url: PropTypes.string.isRequired
    })
  };

  render() {
    var { url, desc, title, link, clickHandler, social_payload } = {
      ...this.props
    };
    return (
      <Box>
        <LazyImg srcSet={url} />
        <Box>
          <Header>{title}</Header>
          <Content>{desc}</Content>
          <Box>
            <Button clickHandler={clickHandler} />
          </Box>
        </Box>
      </Box>
    );
  }
}
