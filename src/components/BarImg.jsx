import React from "react";
import styled from "styled-components";
import { CSSTransitionGroup } from "react-transition-group";
import Lazyload from "react-lazyload";

const BarImgStyled = styled.img`
  width: 5rem;
  height: 5rem;
  border: ${props => (props.active ? "5px solid black" : "0")};
  transition: opacity 0.25s ease-in-out;
  filter: ${props => (props.active ? "grayscale(0)" : "grayscale(1)")};
`;

const BarImg = ({ srcSet, clickHandler, active, position }) => (
  <Lazyload throttle={500} height={100}>
    <CSSTransitionGroup
      transitionName="image-animation"
      transitionAppear={true}
      transitionAppearTimeout={250}
      transitionEnter={false}
      transitionLeave={false}
    >
      {clickHandler ? (
        <BarImgStyled
          srcSet={srcSet}
          onClick={() => clickHandler(position)}
          active={active}
        />
      ) : (
        <BarImgStyled srcSet={srcSet} active={active} />
      )}
    </CSSTransitionGroup>
  </Lazyload>
);

export default BarImg;
