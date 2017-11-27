import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Bar from "components/Bar";
import BarImg from "components/BarImg";
import BarButton from "components/BarButton";

const ImageBar = Bar.extend`
  height: 6rem;
  padding: 0.5rem;
  align-items: center;
  justify-content: space-evenly;
  width: 75%;
`;

const BottomBarStyled = Bar.extend`
  align-items: center;
  height: 10rem;
  justify-content: space-evenly;
`;

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
    return <BarButton hidden />;
  }

  next_helper(count, position, photoHandler) {
    if (count - position > 0) {
      return (
        <BarButton onClick={() => photoHandler(position + 1)}>Next</BarButton>
      );
    }
    return <BarButton hidden />;
  }

  bar_helper(url, count, position, photoHandler) {
    // 3 basic states
    // At the beginning
    // While in the middle
    // At the end

    if (position == 1) {
      return (
        <ImageBar>
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
        </ImageBar>
      );
    }
    if (count - position == 0) {
      return (
        <ImageBar>
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
        </ImageBar>
      );
    }

    return (
      <ImageBar>
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
      </ImageBar>
    );
  }

  render() {
    var { url, count, photoHandler, position } = { ...this.props };
    return (
      <BottomBarStyled>
        {this.prev_helper(count, position, photoHandler)}
        {this.bar_helper(url, count, position, photoHandler)}
        {this.next_helper(count, position, photoHandler)}
      </BottomBarStyled>
    );
  }
}
