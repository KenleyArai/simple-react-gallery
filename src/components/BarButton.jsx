import Button from "components/Button";

const BarButton = Button.extend`
  visibility: ${props => (props.hidden ? "hidden" : "visible")};
`;

export default BarButton;
