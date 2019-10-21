import React from 'react';

const Card = (props) => {
  const { text, columnIndex, cardIndex, moveCards } = props;

  const moveLeft = (e) => {
    moveCards(columnIndex, cardIndex, 'left')
  }

  const moveRight = (e) => {
    moveCards(columnIndex, cardIndex, 'right')
  }
  return (
    <div>
      {columnIndex === 0 ? null :
        <button onClick={moveLeft}>
        left
      </button>}
      {text}
      {columnIndex === 3 ? null :
        <button onClick={moveRight}>
        right
      </button>}
    </div>
  )
}

export default Card;