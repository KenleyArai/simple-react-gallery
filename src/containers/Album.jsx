import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import AlbumCard from "components/AlbumCard";
import Loading from "components/Loading";

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
      show_state: undefined,
      _loaded: false
    };
  }

  componentDidMount() {
    this.setState({ show_state: "All", _loaded: true });
  }

  render() {
    var { galleries } = { ...this.props };

    if (this.state._loaded) {
      return galleries.map(gallery => <AlbumCard {...gallery} />);
    }

    return <Loading />;
  }
}
