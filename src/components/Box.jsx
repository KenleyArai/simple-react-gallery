import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../theme";

const Box = styled.div`
  background: ${props => props.theme.primary};
`;

Box.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string
  })
};

Box.defaultProps = {
  theme: { ...theme }
};

export default Box;
