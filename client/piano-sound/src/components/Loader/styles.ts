import styled, {keyframes} from "styled-components";

const Loading = keyframes`
    0% {
        width: 5px;
        height: 10px;
        background-color: #ff67007a;
    }
    100% {
        height: 35px;
        transform: translatey(15px);
        background-color: #ff6700;
    }
`;

export const LoaderWrapper = styled.div`
    width: 500px;
    height: 200px;
    margin: 20px auto;
    position: relative;

    & span {
        margin-top: 50px;
        background-color: #ff67007a;
        width: 8px;
        height: 10px;
        left: 200px;
        display: block;
        position: absolute;
        bottom: 0;
        animation-name: ${Loading};
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-fill-mode: both;
    }

    & span:nth-of-type(2) {
        left: 213px;
        animation-delay: 0.2s;
    }

    & span:nth-of-type(3) {
        left: 226px;
        animation-delay: 0.4s;
    }

    & span:nth-of-type(4) {
        left: 240px;
        animation-delay: 0.6s;
    }
`;
