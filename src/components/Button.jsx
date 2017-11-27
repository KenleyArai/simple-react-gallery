import styled from "styled-components";

const Button = styled.div`
  display: block;
  width: 2rem;
  height: 2rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);

  &:hover {
    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3),
      0 11px 7px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default Button;
