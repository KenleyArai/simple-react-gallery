import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import uuidv4 from "uuid/v4";

import GalleryImage from "components/GalleryImage";
import Bottombar from "components/Bottombar";

export default class AllPhotos extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  };

  url_helper(url, count) {
    var urls = [];
    for (var i = 1; i < count; i++) {
      urls.push(url + i + ".jpg");
    }
    return urls;
  }

  render() {
    var { url, count } = { ...this.props };

    var urls = this.url_helper(url, count);

    return (
      <div>
        {urls.map(url_t => <GalleryImage key={uuidv4()} url={url_t} />)}
      </div>
    );
  }
}
