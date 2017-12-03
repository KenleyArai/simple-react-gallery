import React from "react";
import Lazyload from "react-lazyload";
import PropTypes from "prop-types";

import Img from "containers/Img";

const LazyImg = ({ src, srcSet, theme }) => {
  return (
    <Lazyload throttle={500} height={300}>
      <Img src={src} />
    </Lazyload>
  );
};

LazyImg.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  theme: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string
  })
};

LazyImg.defaultProps = {
  src: "",
  srcSet: "",
  theme: {
    primary: "",
    secondary: "",
    tertiary: ""
  }
};

export default LazyImg;
