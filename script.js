document.addEventListener('DOMContentLoaded', () => {
  const boardDisplay = document.querySelector('#board')
  const resultMess = document.querySelector('.result')

  const width = 4
  let tiles = []
  let tilesArr = []
  // console.log(tiles)

  const combineRows = () => {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        if (tilesArr[i][j] === tilesArr[i + 1][j + 1].innerHTML) {
          tilesArr[i + 1][j + 1] = 0
        }
      }
    }
  }
  const combineColumn = () => {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; i++) {
        if (
          tilesArr[i][j].innerHTML === tilesArr[i + width][j + width].innerHTML
        ) {
          tilesArr[i + width][j + width].innerHTML = 0
        }
      }
    }
  }
  // Filter rows right to find values then combine
  const combineRight = () => {
    for (let i = 0; i < width; i++) {
      let total = []
      let subTotal = []
      for (let j = 0; j < width; j++) {
        if (tilesArr[i][j] !== 0) {
          total.push(tilesArr[i][j])
        }
      }
      if (total.length === 1) {
        tilesArr[i] = [0, 0, 0, total[0]]
      } else {
        for (let k = 0; k < total.length; k++) {
          if (total[k - 1] === total[k]) {
            subTotal.push(total[k] + total[k])
          } else if (k === 1) {
            subTotal.push(total[k - 1])
          } else if (k === 2 && total[k] === total[k - 1]) {
            subTotal.push(total[k] + total[k])
            if (total.length > 3) {
              subTotal.push(total[k + 1])
            }
          }
        }
      }
      // console.log(subTotal)
      if (subTotal.length) {
        for (let o = 0; o < tilesArr[i].length; o++) {
          if (subTotal[o] !== undefined) {
            // console.log(subTotal[o])
            tilesArr[i][o] = subTotal[o]
            // console.log(tilesArr)
          } else {
            tilesArr[i][o] = 0
          }
          tilesArr[i].reverse()
        }
      }
      console.log(tilesArr[i])
    }
  }
  // Filter rows left to find values then combine
  const combineLeft = () => {
    // Iterate over every index of each array
    // Inside of this nested for loop
    // Create empty temporary array(total)
    for (let i = 0; i < width; i++) {
      let total = []
      let subTotal = []
      for (let j = 0; j < width; j++) {
        if (tilesArr[i][j] !== 0) {
          // console.log('pushing', tilesArr[i][j])
          total.push(tilesArr[i][j])
        }
      }
      // console.log('totalLength', total.length)
      // if (total.length === 0) return
      if (total.length === 1) {
        tilesArr[i] = [total[0], 0, 0, 0]
      } else {
        for (let k = 1; k < total.length; k++) {
          if (total[k - 1] === total[k]) {
            // console.log('same', total[k] + total[k])
            subTotal.push(total[k] + total[k])
          } else if (k === 1) {
            console.log('k===1', total[k - 1])
            subTotal.push(total[k - 1])
          } else if (k === 2 && total[k] === total[k - 1]) {
            subTotal.push(total[k] + total[k])
            if (total.length > 3) {
              subTotal.push(total[k + 1])
            }
          }
        }
      }
      // console.log(subTotal)
      if (subTotal.length) {
        for (let o = 0; o < tilesArr[i].length; o++) {
          if (subTotal[o] !== undefined) {
            // console.log(subTotal[o])
            tilesArr[i][o] = subTotal[o]
            // console.log(tilesArr)
          } else {
            tilesArr[i][o] = 0
          }
        }
      }

      console.log(tilesArr[i])
    }
  }

  // Move Right

  // Move Up

  // Check for win condition, loss, or generate new tile
  const checkGameOver = () => {
    let winner = tilesArr.filter((tile) => tile == 2048)
    for (let i = 0; i < width; i++) {
      if (winner === true) {
        resultMess.innerHTML = 'You Win!'
      }
    }
  }
  // console.log(tilesArr[i][j])
  // Event Listeners

  // Generate number tiles with value "2"
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
    if (e.keyCode === 37) {
      combineLeft()
      renderBoard()
      generateTile()
      renderBoard()
    } else if (e.keyCode === 38) {
      combineUp()
      renderBoard()
      generateTile()
      renderBoard()
    } else if (e.keyCode === 39) {
      combineRight()
      renderBoard()
      generateTile()
      renderBoard()
    } else if (e.keyCode === 40) {
      combineDown()
    }
  }
  document.addEventListener('keydown', moves)
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

  console.log(tilesArr)
  const renderBoard = () => {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        tiles[i][j].innerHTML = tilesArr[i][j]
        // console.log(tiles[i][j])
      }
    }
  }
  createBoard()
  console.log(tilesArr)
  generateTile()
  generateTile()
  // console.log(tilesArr[0])
  renderBoard()
  generateTile()
  generateTile()
  renderBoard()
  // console.log(tilesArr)
  // renderBoard()
  // combineLeft()
})
