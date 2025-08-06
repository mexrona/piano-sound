import styled from "styled-components";

export const Warn = styled.h2`
    margin-top: 50px;
`;

export const NotesListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 0 auto 10px;
    padding: 10px;
    background-color: #000;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Delete = styled.div`
    cursor: pointer;
    transition: all 0.1s linear;

    &:hover {
        color: #000;
        background-color: #fff;
    }
`;
