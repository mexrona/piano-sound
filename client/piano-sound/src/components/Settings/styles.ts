import styled from "styled-components";

export const SettingsWrapper = styled.div`
    position: relative;
`;

export const Settings = styled.div`
    display: block;
    width: 250px;
    padding: 10px;
    text-align: left;
    font-weight: 700;
    color: #000;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const SettingsItems = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const SettingsItem = styled.label`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    width: fit-content;
    margin-left: 10px;
`;

export const Volume = styled.span`
    width: 50px;
    margin-left: 10px;
`;
