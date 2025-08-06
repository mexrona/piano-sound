import styled from "styled-components";

const Modal = `
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 120vh;
    background-color: rgba(36, 36, 36, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;`;

export const Hide = styled.div`
    ${Modal};
    display: none;
`;

export const Show = styled.div`
    ${Modal};
    display: flex;
`;

export const ModalInner = styled.div`
    width: fit-content;
    padding: 15px;
    background-color: #fff;
    border-radius: 4px;
`;
