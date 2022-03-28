import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
        <Wrapper>
            <Link to="/"><Avater src="/img/man.jpg" />
</Link>
            <Menu>
                <Nav to="/about">About</Nav>
                <Nav to="/about">Register</Nav>
                <Nav to="/about">Sign out</Nav>
            </Menu>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #eefe;
    display: flex;
    align-items: center;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const Avater = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 20px;
    object-fit: cover;
    border: solid 2px purple;
`;
const Menu = styled.div`
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    width: 400px;
`;

const Nav = styled(Link)`
    text-decoration: none;
    background-color: purple;
    width: 110px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 8px;
    transition: all 500ms;
    transform: scale(1);

    :hover{
        cursor: pointer;
        transform:  scale(1.06);
        background-color: black;
    }
`;