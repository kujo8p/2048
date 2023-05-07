document.addEventListener('DOMContentLoaded', () => {
  let board = [0, 0, 0, 0]

  const width = 2

  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      board = document.querySelectorAll('tile')
    }
    generateTile()
    generateTile()
  }
  createBoard()

  function generateTile() {
    random = Math.floor(Math.random() * board.length)
    if (board[random] === 0) {
      board[random].innerHTML === 2
    }
  }
})
