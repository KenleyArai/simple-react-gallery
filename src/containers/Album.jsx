import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import AlbumCard from "components/AlbumCard";
import Topbar from "components/Topbar";
import Gallery from "containers/Gallery";
import Loading from "components/Loading";

import uuidv4 from "uuid/v4";

const AlbumContainer = styled.div``;

export default class Album extends PureComponent {
  static propTypes = {
    gallerys: PropTypes.arrayOf(
      PropTypes.oneOf([
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          desc: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired
        }),
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          desc: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired
        })
      ])
    )
  };

  constructor(props) {
    super(props);

    this.state = {
      state_name: undefined,
      _loaded: false
    };

    this.backHandler = this.backHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state_helper = this.state_helper.bind(this);
  }

  componentDidMount() {
    this.setState({ state_name: "All", _loaded: true });
  }

  backHandler() {
    this.setState({ state_name: "All", url: undefined, count: undefined });
  }

  clickHandler(url, count) {
    this.setState({ state_name: "Gallery", url: url, count: count });
  }

  state_helper(state_name, galleries) {
    if (state_name == "All") {
      return (
        <AlbumContainer>
          {galleries.map(gallery => (
            <AlbumCard
              key={uuidv4()}
              clickHandler={this.clickHandler}
              {...gallery}
            />
          ))}
        </AlbumContainer>
      );
    }
    return (
      <AlbumContainer>
        <Topbar clickHandler={this.backHandler} />
        <Gallery url={this.state.url} count={this.state.count} />
      </AlbumContainer>
    );
  }

  render() {
    var { galleries } = { ...this.props };

    if (!this.state._loaded) {
      return <Loading />;
    }

    return this.state_helper(this.state.state_name, galleries);
  }
}
