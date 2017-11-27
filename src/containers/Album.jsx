import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import AlbumCard from "components/AlbumCard";

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

  render() {
    var { galleries } = { ...this.props };

    return galleries.map(gallery => <AlbumCard {...gallery} />);
  }
}
