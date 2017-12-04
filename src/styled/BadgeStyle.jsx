import styled from "styled-components";

import blank from "../images/blank.svg";

function background_helper(type) {
  switch (type) {
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
