import React from 'react';
import { useSpring, config } from 'react-spring';
import { Container, StyledH1, StyledH3, StyledImg } from './ProductCardStyle';



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ProductCard = ({item}) => {
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
            <StyledH3>{`¥ ${item.price}`}</StyledH3>
            <StyledH3>{item.quantity}</StyledH3>
        </Container>
    );
}

export default ProductCard;