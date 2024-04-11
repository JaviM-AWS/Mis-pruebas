import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './componentes/Square.jsx'
import { TURNS } from './constantes.js'
import { checkWinnerFrom } from './logica/board.js'
import { WinnerModal } from './componentes/WinnerModal.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  
  const checkEndGame = (newBoard) => {
    // Si todas las square (every) son diferentes a null (son ❌ o ⚪)
    return newBoard.every(square => square !== null)
  }


  const updateBoard = (index) => {
    if (board[index] || winner) return
   
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
  
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <button onClick={resetGame}>Reiniciar</button>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

        <WinnerModal resetGame={resetGame} winner={winner}/>
      
    </main> 
  ) 
}

export default App