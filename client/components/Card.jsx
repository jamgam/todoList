import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

const Card = (props) => {
  const { text, columnIndex, cardIndex, moveCards } = props;

  const moveLeft = (e) => {
    moveCards(columnIndex, cardIndex, 'left')
  }

  const moveRight = (e) => {
    moveCards(columnIndex, cardIndex, 'right')
  }

  return (
    <FlexDiv>
      <button disabled={columnIndex === 0} onClick={moveLeft}>
        left
      </button>
        {text}
      <button disabled={columnIndex === 3} onClick={moveRight}>
        right
      </button>
    </FlexDiv>
  )
}

export default Card;