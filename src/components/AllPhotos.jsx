import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import uuidv4 from "uuid/v4";

import GalleryImage from "components/GalleryImage";
import Masonry from "components/Masonry";

export default class AllPhotos extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    clickHandler: PropTypes.func
  };

  url_helper(url, count) {
    var urls = [];
    for (var i = 1; i < count; i++) {
      urls.push(i);
    }
    return urls;
  }

  render() {
    var { url, count, clickHandler } = { ...this.props };

    var urls = this.url_helper(url, count);

    return (
      <Masonry>
        {urls.map(url_t => (
          <GalleryImage
            key={uuidv4()}
            url={url + url_t + ".jpg"}
            clickHandler={clickHandler}
            position={url_t}
          />
        ))}
      </Masonry>
    );
  }
}
