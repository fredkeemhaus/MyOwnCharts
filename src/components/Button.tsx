import styled from "styled-components";
import { POINT_COLOR } from "../config/color";

interface ButtonProps {
  position?: string;
  bgColor?: string;
  name: string;
}

const DataControlButton = styled.div<{ position?: string }>`
  display: flex;
  justify-content: ${(props) =>
    props.position ? props.position : "flex-start"};
  align-items: center;

  button {
    border-radius: 6px;
    background-color: ${POINT_COLOR};
    padding: 8px 24px;
    font-size: 0.8em;
    font-weight: 600;
  }
`;

const ControlButton = ({ position, name }: ButtonProps) => {
  return (
    <DataControlButton position={position}>
      <button>{name}</button>
    </DataControlButton>
  );
};

export default ControlButton;
