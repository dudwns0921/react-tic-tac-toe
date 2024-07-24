import styled from "styled-components"

const Square = styled.button`
    background: #fff;
    border: 1px solid #999;
    font-size: 24px;
    height: 34px;
    width: 34px;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`

type SquareComponentProps = {
  value: string|null
  onSquareClick: (i:number) => void
  index:number
}

const SquareComponent = ({value, onSquareClick, index}:SquareComponentProps) => {
    return (
        <Square onClick={()=>{onSquareClick(index)}}>{value}</Square>
      )
}

export default SquareComponent