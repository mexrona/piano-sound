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
    background-color: #1a1a1a;
    box-shadow: -1px 1px 5px #fff;
    transition: background-color 0.1s linear;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Delete = styled.div`
    padding: 10px;
    color: #2fa7f3;
    font-weight: 700;
    background-color: #fff;
    cursor: default;
    transition: all 0.1s linear;

    &:hover {
        color: #fff;
        background-color: #2fa7f3;
    }
`;
