document.addEventListener('DOMContentLoaded', () => {
  const boardDisplay = document.querySelector('#board')
  const resultMess = document.querySelector('.result')

  const width = 4
  let tiles = []
  let tilesArr = []
  // console.log(tiles)
  // Move Up
  const moveUp = (e) => {
    if (e.keyCode === 38) {
      for (let i = 0; i < tiles.length; i++) {
        //   if i < 3 then there is no row above it so there is no -4
        //   return
        // } else (tiles[i] !== 0) {
      }
    }
  }

  // Check for win condition, loss, or generate new tile
  const checkGameOver = () => {
    let winner = tiles.filter((tile) => tile == 2048)
    for (let i = 0; i < tiles.length; i++) {
      if (winner === true) {
        resultMess.innerHTML = 'You Win!'
      }
    }
  }

  // Generate number tiles with value "2"
  const generateTile = () => {
    randomNum = Math.floor(Math.random() * width)
    console.log(randomNum)
    if (tilesArr[randomNum][randomNum] === 0) {
      tilesArr[randomNum][randomNum] = 2
      // checkGameOver()
    } else generateTile()
  }

  // Create game board
  const createBoard = () => {
    // console.log(tiles)
    for (let i = 0; i < width; i++) {
      tiles[i] = []
      tilesArr[i] = []
      for (let j = 0; j < width; j++) {
        let tile = document.createElement('div')
        tile.innerHTML = 0
        boardDisplay.appendChild(tile)
        tiles[i][j] = tile
        tilesArr[i][j] = 0
        // console.log(tiles)
      }
    }
  }

  createBoard()

  generateTile()
  generateTile()

  console.log(tilesArr)
  const renderBoard = () => {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        tiles[i][j].innerHTML = tilesArr[i][j]
      }
    }
  }
  renderBoard()
})
