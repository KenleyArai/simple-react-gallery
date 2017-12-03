import React from "react";
import Lazyload from "react-lazyload";
import PropTypes from "prop-types";

import Img from "containers/Img";

const LazyImg = ({ src, srcSet, theme }) => {
  if (src) {
    return (
      <Lazyload throttle={500} height={300}>
        <Img src={src} />
      </Lazyload>
    );
  }
  return (
    <Lazyload throttle={500} height={300}>
      <Img srcSet={src} />
    </Lazyload>
  );
};

LazyImg.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string
};

LazyImg.defaultProps = {
  src: "",
  srcSet: ""
};

export default LazyImg;
