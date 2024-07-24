import styled from 'styled-components'
import SquareComponent from './SquareComponent'

const BoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const BoardRowWrapper = styled.div`
    display: flex;
`

const StatusText = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`

type BoardComponentProps = {
    squares: Array<string|null>
    xIsNext: boolean
    onPlay: (newSquares:Array<string|null>) => void
}

export const BoardComponent = ({squares, xIsNext, onPlay}:BoardComponentProps) => {

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

    const calculateWinner = () => {
        for(let i=0; i<lines.length; i++) {
            const [a, b, c] = lines[i]
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
    }
    
    const winner = calculateWinner()
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`

    const handleSquareClick = (i:number) => {
        if(squares[i]||calculateWinner()) return

        const newSquares = squares.slice()
        if(xIsNext) {
            newSquares[i] = 'X'
        } else {
            newSquares[i] = 'O'
        }

        onPlay(newSquares)
    }

  return (
    <BoardWrapper>
        <StatusText>{status}</StatusText>
        <BoardRowWrapper>
            <SquareComponent value={squares[0]} onSquareClick={handleSquareClick} index={0}/>
            <SquareComponent value={squares[1]} onSquareClick={handleSquareClick} index={1}/>
            <SquareComponent value={squares[2]} onSquareClick={handleSquareClick} index={2}/>
        </BoardRowWrapper>
        <BoardRowWrapper>
            <SquareComponent value={squares[3]} onSquareClick={handleSquareClick} index={3}/>
            <SquareComponent value={squares[4]} onSquareClick={handleSquareClick} index={4}/>
            <SquareComponent value={squares[5]} onSquareClick={handleSquareClick} index={5}/>
        </BoardRowWrapper>
        <BoardRowWrapper>
            <SquareComponent value={squares[6]} onSquareClick={handleSquareClick} index={6}/>
            <SquareComponent value={squares[7]} onSquareClick={handleSquareClick} index={7}/>
            <SquareComponent value={squares[8]} onSquareClick={handleSquareClick} index={8}/>
        </BoardRowWrapper>
    </BoardWrapper>
  )
}
