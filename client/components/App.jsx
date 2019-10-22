import React, { useState, useEffect } from 'react';
import Columns from './Columns';
import styled from 'styled-components';

const FlexDiv = styled.div`
display: flex;
flex-diretion: row;
justify-content: space-evenly;
align-items: stretch;
flex-grow: 1;
background-color: #ECEEEE;
height: 100%;
width: 100%;
`

const App = (props) => {
  
  const [column0, setColumn0] = useState(['task', 'task', 'task', 'task']);
  const [column1, setColumn1] = useState(['task', 'task']);
  const [column2, setColumn2] = useState(['task', 'task']);
  const [column3, setColumn3] = useState(['task', 'task']);
  const columns = [column0, column1, column2, column3];
  const setColumns = [setColumn0, setColumn1, setColumn2, setColumn3];

  const moveCards = (colIdx, cardIdx, direction) => {
    let curCol = columns[colIdx];
    let curCard = curCol[cardIdx];
    let newCol = [...curCol];
    newCol.splice(cardIdx, 1);
    setColumns[colIdx](newCol);
    if (direction === 'left') {
      setColumns[colIdx-1]([...columns[colIdx-1], curCard])
    } else if (direction === 'right') {
      setColumns[colIdx+1]([...columns[colIdx+1], curCard])
    }
  }

  useEffect(() => {
    // fetch data
  }, [])

  return (
    <FlexDiv>
      <Columns index={0} first color={'#8E6E95'} title={'TODO 1'} cards={column0} setCards={setColumn0} moveCards={moveCards} />
      <Columns index={1} color={'#39A59C'} title={'TODO 2'} cards={column1} setCards={setColumn1} moveCards={moveCards} />
      <Columns index={2} color={'#344759'} title={'TODO 3'} cards={column2} setCards={setColumn2} moveCards={moveCards} />
      <Columns index={3} last color={'#E8741E'} title={'TODO 4'} cards={column3} setCards={setColumn3} moveCards={moveCards} />
    </FlexDiv>
  )
}

export default App;