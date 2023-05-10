document.addEventListener('DOMContentLoaded', () => {
  const boardDisplay = document.querySelector('#board')
  const resultMess = document.querySelector('.result')

  const width = 4
  let tiles = []
  let tilesArr = []

  const moveTiles = (line) => {
    const nonEmptyTiles = line.filter((tile) => tile !== 0)
    const emptyTiles = line.length - nonEmptyTiles.length
    const combinedTiles = []

    for (let i = 0; i < nonEmptyTiles.length; i++) {
      if (
        i < nonEmptyTiles.length - 1 &&
        nonEmptyTiles[i] === nonEmptyTiles[i + 1]
      ) {
        const combinedTotal = nonEmptyTiles[i] * 2
        combinedTiles.push(combinedTotal)
        i++
      } else {
        combinedTiles.push(nonEmptyTiles[i])
      }
    }
    const newLine = tilesArr
  }

  const generateTile = () => {
    let randomNum1 = Math.floor(Math.random() * width)
    let randomNum2 = Math.floor(Math.random() * width)
    // console.log(randomNum)
    if (tilesArr[randomNum1][randomNum2] === 0) {
      tilesArr[randomNum1][randomNum2] = 2
      // checkGameOver()
    } else generateTile()
  }

  const moves = (e) => {
    //Left
    if (e.keyCode === 37) {
      moveTiles()
      renderBoard()
      generateTile()
      renderBoard()
    } else if (e.keyCode === 38) {
      //Up
      moveTiles()
    } else if (e.keyCode === 39) {
      //Right
    } else if (e.keyCode === 40) {
      //Down
    }
  }
  document.addEventListener('keydown', moves)

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

  const renderBoard = () => {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        tiles[i][j].innerHTML = tilesArr[i][j]
        // console.log(tiles[i][j])
      }
    }
  }
  console.log(tilesArr)
  createBoard()
  generateTile()
  generateTile()
  renderBoard()
})
