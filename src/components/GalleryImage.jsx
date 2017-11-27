import React from "react";
import styled from "styled-components";

import { CSSTransitionGroup } from "react-transition-group";
import Lazyload from "react-lazyload";

import "styles/image.css";

const GalleryImageStyled = styled.img`
  flex: auto;
  height: auto;
  min-width: 10rem;

  margin: 0 0.25rem 0.25rem 0;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  &:nth-child(4n + 1) {
    width: 16rem;
  }
  &:nth-child(4n + 2) {
    width: 20rem;
  }
  &:nth-child(4n + 3) {
    width: 11rem;
  }
  &:nth-child(4n + 4) {
    width: 24rem;
  }
`;

const GalleryImage = ({ url, position, clickHandler }) => (
  <Lazyload throttle={500} height={300}>
    <CSSTransitionGroup
      transitionName="image-animation"
      transitionAppear={true}
      transitionAppearTimeout={250}
      transitionEnter={false}
      transitionLeave={false}
    >
      <GalleryImageStyled srcSet={url} onClick={() => clickHandler(position)} />
    </CSSTransitionGroup>
  </Lazyload>
);

export default GalleryImage;
