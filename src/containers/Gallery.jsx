import React, { Component } from "react";
import PropTypes from "prop-types";

import GalleryImage from "components/GalleryImage";

export default class Gallery extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  };

  url_helper(url, count) {
    var urls = [];
    for (var i = 0; i < count; i++) {
      urls.push(url + i + ".jpg");
    }
    return urls;
  }

  render() {
    var { url, count } = { ...this.props };

    var urls = this.url_helper(url, count);

    return <div>{urls.map(url => <GalleryImage url={url} />)}</div>;
  }
}
