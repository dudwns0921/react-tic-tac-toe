import { useState } from 'react'
import { BoardComponent } from './BoardComponent'
import styled from 'styled-components'

const GameWrapper =  styled.div`
    display: flex;
    column-gap: 20px;
`

const GameInfoWrapper = styled.ol`
    list-style-type: order;
    margin-top: 20px;
`

export const GameComponent = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])

    const currentSquares = history[history.length-1]

    const handlePlay = (newSquares:Array<string|null>) => {
        setXIsNext(!xIsNext)
        setHistory([...history, newSquares])
    }

    const handleGoToMove = (index:number) => {
        setXIsNext(index%2===0)
        setHistory(history.slice(0, index+1))
    }

  return (
    <GameWrapper>
        <BoardComponent squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay}/>
        <GameInfoWrapper>
            {history.map((squares, index) => {
                return (
                    <li key={index}>
                        <button onClick={()=>{handleGoToMove(index)}}>
                            {index===0 ? 'Go to game start' : `Go to move #${index}`}
                        </button>
                    </li>
                )
            })}
        </GameInfoWrapper>
    </GameWrapper>
  )
}
