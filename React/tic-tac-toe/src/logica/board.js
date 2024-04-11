import { WINNER_COMBOS } from '../constantes.js'

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }

export const checkEndGame = (newBoard) => {
    // Si todas las square (every) son diferentes a null (son ❌ o ⚪)
    return newBoard.every(square => square !== null)
  }