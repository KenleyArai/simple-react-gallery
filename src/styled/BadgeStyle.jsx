import styled from "styled-components";

import blank from "../images/blank.svg";
import linkedin from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";

function background_helper(type) {
  switch (type) {
    case "facebook":
      return facebook;
    case "linkedin":
      return linkedin;
    case "blank":
      return blank;
    default:
      return blank;
  }
  return blank;
}

const BadgeStyle = styled.div`
  background-image: ${props => background_helper(props.type)};
`;

export { background_helper };
export default BadgeStyle;
