import React from 'react';
import { useSpring,  config } from 'react-spring';
import { Container, StyledH1, StyledH3, StyledImg } from './RoboticCardStyle';



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const RobotCard = ({item}) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.to(trans)
            }}
        >
            <StyledImg src={item.photos[0]} loading="lazy" />
            <StyledH1>{item.name}</StyledH1>
            <StyledH3>{`${item.speed} m/s`}</StyledH3>
            <StyledH3>{`${item.orientation} OR`}</StyledH3>
        </Container>
    );
}

export default RobotCard;