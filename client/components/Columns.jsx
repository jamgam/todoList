import React, { useState } from 'react';
import Card from './Card';
import styled from 'styled-components';

const FlexColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding-left: ${props => props.first ? '25px' : '12.5px'};
padding-right: ${props => props.last ? '25px' : '12.5px'};
`

const TitleDiv = styled.div`
height: 30px;
background-color: ${props => props.color};
display: flex;
width: 100%;
`


const Column = (props) => {

  const { cards, title, color, first, last, setCards, index, moveCards } = props;


  const handleClick = (e) => {
    let task = window.prompt();
    setCards([...cards, task]);
  }

  return (
    <FlexColumn first={first} last={last}>
      <TitleDiv color={color}>
        {title}
      </TitleDiv>
      {cards.map((card, i) => <Card moveCards={moveCards} cardIndex={i} columnIndex={index} text={card} />)}
      <button onClick={handleClick}>
        add card
      </button>
    </FlexColumn>
  )
}

export default Column;