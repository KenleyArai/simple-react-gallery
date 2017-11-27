import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import AlbumCard from "components/AlbumCard";
import Topbar from "components/Topbar";
import Gallery from "containers/Gallery";
import Loading from "components/Loading";

import uuidv4 from "uuid/v4";

const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const AlbumHeader = styled.div``;

export default class Album extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    gallerys: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        count: PropTypes.number
      })
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
    this.setState({
      state_name: "All",
      _loaded: true,
      title: this.props.title
    });
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
          <AlbumHeader>{this.state.title}</AlbumHeader>
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
        <AlbumHeader>{this.state.title}</AlbumHeader>
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
