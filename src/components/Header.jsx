import React from "react";
import Lazyload from "react-lazyload";
import PropTypes from "prop-types";

import HeaderStyle from "styled/HeaderStyle";

const Header = ({ children }) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

Header.propTypes = {
  children: PropTypes.string
};

Header.defaultProps = {
  children: ""
};

export default Header;
