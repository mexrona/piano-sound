import styled from "styled-components";

export const Message = styled.div`
    display: block;
    padding: 0.5em;
    font-size: 24px;
    box-shadow: 0 0 1em #58cdcf;
    border-radius: 0.5em;
    opacity: 0;
    cursor: default;
    position: absolute;
    top: -100px;
    left: 50%;
    z-index: 10000;
    transform: translate(-50%, 0);
    transition: all 0.1s linear;
`;
