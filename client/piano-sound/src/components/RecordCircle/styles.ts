import styled, {keyframes} from "styled-components";

const Pulse = keyframes`
  0% {
    background-color: red;
  }
  50% {
    background-color: #f06c6c;
  }
  100% {
    background-color: red;
  }
`;

export const RecordCircle = styled.div`
    width: 1em;
    height: 1em;
    background-color: red;
    border-radius: 50%;
    animation: ease ${Pulse} 2s infinite;
`;
