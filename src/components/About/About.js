import React from 'react'
import styled from 'styled-components'

export default function About() {
  return (
    <Container>
        <Holder>
            <img src="/img/man.jpg" alt="" />
            <Content>Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</Content>
        </Holder>
    </Container>
  )
}


const Container = styled.div`
    height: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 700px;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
`;


const Holder = styled.div`
    img{
        object-fit: cover;
        width: 700px;
        height: 400px;
        margin: 40px 0;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        border-radius: 10px;
    }
`;