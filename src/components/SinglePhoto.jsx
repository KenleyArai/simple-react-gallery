import React from "react";
import styled from "styled-components";
import Topbar from "components/Topbar";
import BottomBar from "components/BottomBar";
import { CSSTransitionGroup } from "react-transition-group";
import Lazyload from "react-lazyload";

const SinglePhotoStyled = styled.img`
  width: 50vw;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const SinglePhoto = ({ url, position, count, clickHandler, photoHandler }) => (
  <div>
    <Topbar clickHandler={clickHandler} />
    <Lazyload throttle={500} height={300}>
      <CSSTransitionGroup
        transitionName="image-animation"
        transitionAppear={true}
        transitionAppearTimeout={250}
        transitionEnter={false}
        transitionLeave={false}
      >
        <SinglePhotoStyled srcSet={url + position + ".jpg"} />
      </CSSTransitionGroup>
    </Lazyload>
    <BottomBar
      url={url}
      position={position}
      count={count}
      photoHandler={photoHandler}
    />
  </div>
);

export default SinglePhoto;
