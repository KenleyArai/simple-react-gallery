import styled from "styled-components";

import blank from "../images/blank.svg";
import linkedin from "../images/linkedin.svg";

function background_helper(type) {
  switch (type) {
    case "linkedin":
      return linkedin;
    case "blank":
      return blank;
    default:
      return blank;
  }
  return blank;
}

const BadgeStyle = styled.div``;

export { background_helper };
export default BadgeStyle;
