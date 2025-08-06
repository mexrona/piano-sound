import styled from "styled-components";

export const Button = styled.button<{$color?: string}>`
    padding: 0.5em 1em;
    font-size: 20px;
    background-color: ${(props) => props.$color};
    border-radius: 0.3em;
    cursor: pointer;
    transition: opacity 0.1s linear;

    &:hover {
        opacity: 0.8;
    }
`;
