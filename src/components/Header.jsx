import React from "react";
import Lazyload from "react-lazyload";
import PropTypes from "prop-types";

import HeaderStyle from "styled/HeaderStyle";
import Box from "components/Box";

const Header = ({ children }) => {
  return (
    <Box>
      <HeaderStyle>{children}</HeaderStyle>
    </Box>
  );
};

Header.propTypes = {
  children: PropTypes.string
};

Header.defaultProps = {
  children: ""
};

export default Header;
