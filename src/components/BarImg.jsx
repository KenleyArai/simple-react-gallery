import styled from "styled-components";

const BarImg = styled.img`
  width: 5rem;
  height: 5rem;
  border: ${props => (props.active ? "5px solid black" : "0")};
`;

export default BarImg;
