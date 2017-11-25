import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Bar from "components/Bar";
import BarImg from "components/BarImg";
import BarButton from "components/BarButton";

export default class BottomBar extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    photoHandler: PropTypes.func.isRequired,
    position: PropTypes.number.isRequired
  };

  prev_helper(count, position, photoHandler) {
    if (position > 1) {
      return (
        <BarButton onClick={() => photoHandler(position - 1)}>Prev</BarButton>
      );
    }
  }

  next_helper(count, position, photoHandler) {
    if (count - position > 0) {
      return (
        <BarButton onClick={() => photoHandler(position + 1)}>Next</BarButton>
      );
    }
  }

  bar_helper(url, count, position, photoHandler) {
    // 3 basic states
    // At the beginning
    // While in the middle
    // At the end

    if (position == 1) {
      return (
        <Bar>
          <BarImg srcSet={url + position + ".jpg"} active alt />
          <BarImg
            clickHandler={photoHandler}
            position={position + 1}
            srcSet={url + (position + 1) + ".jpg"}
            alt
          />
          <BarImg
            clickHandler={photoHandler}
            position={position + 2}
            srcSet={url + (position + 2) + ".jpg"}
            alt
          />
        </Bar>
      );
    }
    if (count - position == 1) {
      return (
        <Bar>
          <BarImg
            clickHandler={photoHandler}
            position={position - 2}
            srcSet={url + (position - 2) + ".jpg"}
            alt
          />
          <BarImg
            clickHandler={photoHandler}
            position={position - 1}
            srcSet={url + (position - 1) + ".jpg"}
            alt
          />
          <BarImg srcSet={url + position + ".jpg"} active alt />
        </Bar>
      );
    }

    return (
      <Bar>
        <BarImg
          clickHandler={photoHandler}
          position={position - 1}
          srcSet={url + (position - 1) + ".jpg"}
          alt
        />
        <BarImg srcSet={url + position + ".jpg"} alt active />
        <BarImg
          clickHandler={photoHandler}
          position={position + 1}
          srcSet={url + (position + 1) + ".jpg"}
          alt
        />
      </Bar>
    );
  }

  render() {
    var { url, count, photoHandler, position } = { ...this.props };
    return (
      <Bar>
        {this.prev_helper(count, position, photoHandler)}
        {this.bar_helper(url, count, position, photoHandler)}
        {this.next_helper(count, position, photoHandler)}
      </Bar>
    );
  }
}
