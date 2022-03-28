import React from 'react'
import styled from 'styled-components'
import data from '../data.json'

export default function View() {
  return (
    <Container>
        <Wrapper>
            {
                data?.map((props) =>(
                    <Card key={props.id}>
                        <img src={props.cardImg} alt="" />
                    </Card>
                ))
            }
        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;


const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


const Card = styled.div`
    width: 350px;
    height: 230px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 10px;
    margin: 10px;
    transform: scale(1);
    transition: all 500ms;

    :hover{
        cursor: pointer;
        transform:  scale(0.98)
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 8px;

    }
`;
