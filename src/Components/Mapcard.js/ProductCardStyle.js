import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
    display: inline-block;
    padding: 1em;
    background: #C7D2FE66;
    border-radius: 10px;
    z-index: 1;
    width: 190px;
    position: relative;
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    background-clip: border-box;
    cursor: pointer;
`;

export const StyledImg = styled.img`
    width: 180px;
    height: auto;
    border: 2px solid #000;
`;

export const StyledH1 = styled.h1`
    line-height: 0.9;
    letter-spacing: 0.5;
    font-size: 19px;
    font-family: 'Abel', sans-serif;
`;

export const StyledH3 = styled.h3`
    line-height: 0.6;
    font-family: 'Abel', sans-serif;
    font-size: 10px;
`;