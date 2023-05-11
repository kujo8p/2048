document.addEventListener('DOMContentLoaded', () => {
  const boardDisplay = document.querySelector('#board')
  const resultMess = document.querySelector('.result')
  const playAgainBtn = document.querySelector('button')

  const width = 4
  let tiles = []
  let tilesArr = []

  const combineDown = () => {
    for (let i = 0; i < width; i++) {
      let total = []
      let subTotal = []
      let downSubTotal = [0, 0, 0, 0]
      for (let j = 0; j < width; j++) {
        if (tilesArr[j][i] !== 0) {
          total.unshift(tilesArr[j][i])
        }
      }
      if (total.length === 1) {
        total.reverse()
        tilesArr[3][i] = total[0]
        tilesArr[2][i] = 0
        tilesArr[1][i] = 0
        tilesArr[0][i] = 0
      } else if (total.length > 1) {
        console.log(total)
        for (let k = 1; k < total.length; k++) {
          if (total[k - 1] === total[k]) {
            // console.log('same', total[k] + total[k])
            subTotal.push(total[k] + total[k])
          } else if (k === 1) {
            // console.log('k===1', total[k - 1])
            subTotal.push(total[k - 1])
            if (total.length === 2) {
              subTotal.push(total[k])
            }
          } else if (k === 2 && total[k] === total[k - 1]) {
            subTotal.push(total[k] + total[k])
            if (total.length > 3) {
              subTotal.push(total[k + 1])
            }
          } else if (k === 2 && total[k] !== total[k - 1]) {
            subTotal.push(total[k - 1])
            if (total.length === 3) {
              subTotal.push(total[k])
              console.log(subTotal)
            }
          } else if (k === 3 && total[k] === total[k - 1]) {
            subTotal.push(total[k] + total[k])
            if (total.length > 3) {
              subTotal.push(total[k + 1])
              console.log(subTotal)
            }
          } else if (k === 3 && total[k] !== total[k - 1]) {
            subTotal.push(total[k - 1])
            if (total.length === 4) {
              subTotal.push(total[k])
            }
          }
        }
      }
      console.log(subTotal)

      if (subTotal.length) {
        for (let o = 0; o < width; o++) {
          // console.log(subTotal[o])
          if (subTotal[o] !== undefined) {
            downSubTotal[o] = subTotal[o]
            // console.log('undefined', subTotal)

            // subTotal[0] = 0
            // console.log(subTotal[o])
            // tilesArr[o][i] = subTotal[o]
            // console.log(tilesArr)
          }
        }
        downSubTotal.reverse()
        console.log(downSubTotal)
        for (let x = width - 1; x >= 0; x--) {
          tilesArr[x][i] = downSubTotal[x]
        }
      }
    }
  }
  const combineUp = () => {
    for (i = 0; i < width; i++) {
      let total = []
      let subTotal = []
      for (j = 0; j < width; j++) {
        if (tilesArr[j][i] !== 0) {
          total.push(tilesArr[j][i])
          console.log(' j ' + j + ' i ' + i + ' ' + tilesArr[j][i])
        }
      }
      console.log(total.length)
      if (total.length === 1) {
        console.log('first condition')

        tilesArr[0][i] = total[0]
        tilesArr[1][i] = 0
        tilesArr[2][i] = 0
        tilesArr[3][i] = 0

        // console.log('messege', tilesArr[j])
      } else if (total.length > 1) {
        console.log('second condition')
        // console.log(tilesArr[i][j])
        for (let k = 1; k < total.length; k++) {
          if (total[k - 1] === total[k]) {
            // console.log('same', total[k] + total[k])
            subTotal.push(total[k] + total[k])
          } else if (k === 1) {
            // console.log('k===1', total[k - 1])
            subTotal.push(total[k - 1])
            if (total.length === 2) {
              subTotal.push(total[k])
            }
          } else if (k === 2 && total[k] === total[k - 1]) {
            subTotal.push(total[k] + total[k])
            if (total.length > 3) {
              subTotal.push(total[k + 1])
            }
          } else if (k === 2 && total[k] !== total[k - 1]) {
            subTotal.push(total[k - 1])
            if (total.length === 3) {
              subTotal.push(total[k])
              console.log(subTotal)
            }
          } else if (k === 3 && total[k] === total[k - 1]) {
            subTotal.push(total[k] + total[k])
            if (total.length > 3) {
              subTotal.push(total[k + 1])
              console.log(subTotal)
            }
          } else if (k === 3 && total[k] !== total[k - 1]) {
            subTotal.push(total[k - 1])
            if (total.length === 4) {
              subTotal.push(total[k])
            }
          }
        }
      }
      console.log(subTotal)
      if (subTotal.length) {
        for (let o = 0; o < width; o++) {
          if (subTotal[o] !== undefined) {
            // console.log(subTotal[o])
            tilesArr[o][i] = subTotal[o]
            // console.log(tilesArr)
          } else {
            tilesArr[o][i] = 0
          }
        }
      }
      console.log(tilesArr)
    }
  }

  // Filter rows right to find values then combine
  const combineRight = () => {
    for (let i = 0; i < width; i++) {
      let total = []
      let subTotal = []
      for (let j = width - 1; j >= 0; j--) {
        if (tilesArr[i][j] !== 0) {
          total.push(tilesArr[i][j])
        }
      }
      console.log(total)
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
            if (total.length === 2) {
              subTotal.push(total[k])
            }
          } else if (k === 2 && total[k] === total[k - 1]) {
            subTotal.push(total[k] + total[k])
            if (total.length > 3) {
              subTotal.push(total[k + 1])
            }
          } else if (k === 2 && total[k] !== total[k - 1]) {
            subTotal.push(total[k - 1])
            if (total.length === 3) {
              subTotal.push(total[k])
            }
          } else if (k === 3 && total[k] === total[k - 1]) {
            subTotal.push(total[k] + total[k])
            if (total.length > 3) {
              subTotal.push(total[k + 1])
            }
          } else if (k === 3 && total[k] !== total[k - 1]) {
            subTotal.push(total[k - 1])
            if (total.length === 4) {
              subTotal.push(total[k])
            }
          }
        }
      }

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

      tilesArr[i].reverse()
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
          total.push(tilesArr[i][j])
        }
      }
      console.log(total)
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
            if (total.length === 2) {
              subTotal.push(total[k])
            }
          } else if (k === 2 && total[k] === total[k - 1]) {
            subTotal.push(total[k] + total[k])
            if (total.length > 3) {
              subTotal.push(total[k + 1])
            }
          } else if (k === 2 && total[k] !== total[k - 1]) {
            subTotal.push(total[k - 1])
            if (total.length === 3) {
              subTotal.push(total[k])
            }
          } else if (k === 3 && total[k] === total[k - 1]) {
            subTotal.push(total[k] + total[k])
            if (total.length > 3) {
              subTotal.push(total[k + 1])
            }
          } else if (k === 3 && total[k] !== total[k - 1]) {
            subTotal.push(total[k - 1])
            if (total.length === 4) {
              subTotal.push(total[k])
            }
          }
        }
      }

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
  // console.log(tilesArr[i][j])
  // Event Listeners

  // Generate number tiles with value "2"
  const generateTile = () => {
    let randomNum1 = Math.floor(Math.random() * width)
    let randomNum2 = Math.floor(Math.random() * width)
    // console.log(randomNum)
    if (tilesArr[randomNum1][randomNum2] === 0) {
      tilesArr[randomNum1][randomNum2] = 2
      checkforWin()
      checkGameOver()
    } else generateTile()
  }
  // Controls for the game movement
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
      renderBoard()
      generateTile()
      renderBoard()
    }
  }
  document.addEventListener('keydown', moves)
  // Create game board
  const createBoard = () => {
    for (let i = 0; i < width; i++) {
      tiles[i] = []
      tilesArr[i] = []
      for (let j = 0; j < width; j++) {
        let tile = document.createElement('div')
        tile.innerHTML = 0
        boardDisplay.appendChild(tile)
        tiles[i][j] = tile
        tilesArr[i][j] = 0
      }
    }
  }

  // console.log(tilesArr)
  const renderBoard = () => {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        tiles[i][j].innerHTML = tilesArr[i][j]
      }
    }
  }
  // Check if there are no more empty spots on the board
  const checkGameOver = () => {
    let zeros = 0
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        if (tilesArr[i][j] === 0) {
          zeros++
        }
      }
    }
    if (zeros === 0) {
      resultMess.innerHTML =
        'Game Over! Congrats, you no longer need to play this game!'
      document.removeEventListener('keydown', moves)
    }
  }
  // Check to see if any tile equals 2048
  const checkforWin = () => {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        // console.log(tilesArr[i][j])
        if (tiles[i][j].innerHTML === 2048) {
          resultMess.innerHTML = 'You Win!'
          document.removeEventListener('keydown', moves)
        }
      }
    }
  }
  // Reload the page
  const playAgain = () => {
    window.location.reload()
  }
  playAgainBtn.addEventListener('click', playAgain)

  createBoard()

  console.log(tilesArr)
  generateTile()
  generateTile()

  renderBoard()
})
