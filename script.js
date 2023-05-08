document.addEventListener('DOMContentLoaded', () => {
  const boardDisplay = document.querySelector('#board')

  const width = 4
  let tiles = []

  // Create game board
  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      tile = document.createElement('div')
      tile.innerHTML = 0
      boardDisplay.appendChild(tile)
      tiles.push(tile)
    }
  }
  createBoard()
})
