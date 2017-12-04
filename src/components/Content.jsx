import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../theme";

const Content = styled.div`
  background: ${props => props.theme.secondary};
`;

Content.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string
  })
};

Content.defaultProps = {
  theme: { ...theme }
};

export default Content;
