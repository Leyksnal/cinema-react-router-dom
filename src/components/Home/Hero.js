import React from 'react'
import styled from 'styled-components'

export default function Hero() {
  return (
    <Container>
        <Text>Welcome</Text>
        <Name>Leke</Name>
    </Container>
  )
}


const Text = styled.div`
    font-weight: 500;
    font-size: 1.2rem;
    color: #fff;
`;
const Name = styled.div`
    font-weight: 500;
    font-size: 4rem;
    color: #fff;
`;


const Container = styled.div`
    width: 100%;
    height: 600px;
    background-image: url('/img/man.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;