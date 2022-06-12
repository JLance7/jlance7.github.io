//globals
let board = []
let player = 'X'
win = false
draw = false
xWins = 0
oWins = 0
let button = null
let xScore = null
let oScore = null
let symbol = null
let winText = null
let turn = null

window.onload = function () {
  button = document.getElementsByClassName('button')[0]
  xScore = document.getElementsByClassName('xScore')[0]
  oScore = document.getElementsByClassName('oScore')[0]
  symbol = document.getElementsByClassName('symbol')[0]
  winText = document.getElementsByClassName('winner')[0]
  turn = document.getElementsByClassName('turn')[0]
  win = false
  draw = false

  for (let i = 0; i < 3; i++) {
    board.push(['', '', ''])
  }
  console.log(board)

  button.onclick = clearBoard

  xScore.innerHTML = 'X: ' + xWins
  oScore.innerHTML = 'O: ' + oWins
}

function place(num) {
  let change = document.getElementsByClassName(num)[0]

  if (win || draw) {
    return
  }

  console.log(num)
  // console.log(board)
  if (change.innerHTML == '') {
    let row
    let col
    if (num >= 1 && num <= 3) row = 0
    else if (num >= 4 && num <= 6) row = 1
    else row = 2

    if (num % 3 == 0) col = 2
    else col = (num % 3) - 1
    console.log('row: ' + row + ' col: ' + col)
    board[row][col] = player

    if (player == 'X') {
      change.style.color = 'blue'
    } else {
      change.style.color = 'red'
    }

    change.innerHTML = player
    win = checkWin()
    draw = checkDraw()

    if (win) {
      winText.style.visibility = 'visible'
      winText.style.display = 'inline-block'

      if (player == 'X') {
        winText.style.color = 'blue'
        xWins++
        xScore.innerHTML = 'X: ' + xWins
      } else {
        winText.style.color = 'red'
        oWins++
        oScore.innerHTML = 'O: ' + oWins
      }

      winText.innerHTML = 'Player ' + player + ' wins!'
      turn.style.visibility = 'hidden'
      turn.style.display = 'none'

      return
    }

    if (draw) {
      winText.style.visibility = 'visible'
      winText.style.display = 'inline-block'
      winText.innerHTML = "It's a draw!"
      winText.style.color = '#212529';
      turn.style.visibility = 'hidden'
      turn.style.display = 'none'

      return
    }

    if (player == 'X') {
      player = 'O'
      symbol.style.color = 'red'
      symbol.textContent = player
    } else {
      player = 'X'
      symbol.style.color = 'blue'
      symbol.textContent = player
    }
  }
}

function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') return false
    }
  }
  return true
}

function checkWin() {
  count = 0

  //check row win
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == player) {
        count++
      }
    }
    if (count == 3) return true
    count = 0
  }

  //check col win
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[j][i] == player) {
        count++
      }
    }
    if (count == 3) return true
    count = 0
  }

  //check diagonal win
  for (let i = 0, j = 0; j < 3; i++, j++) 
    if (board[i][j] == player) 
      count++
  if (count == 3) 
    return true
  count = 0

  for (let i = 2, j = 0; i >= 0; i--, j++) 
    if (board[i][j] == player) 
      count++
  if (count == 3) 
    return true
  count = 0

  return false
}

function clearBoard() {
  win = false
  draw = false
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i][j] = ''
    }
  }

  turn.style.display = 'inline-block'
  turn.style.visibility = 'visible'

  if (player == 'O') {
    symbol.style.color = 'red'
  } else {
    symbol.style.color = 'blue'
  }

  winText.style.visibility = 'hidden'
  winText.style.display = 'none'

  //clear inner html
  for (let i = 0; i < 9; i++) {
    let cell = document.getElementsByClassName(i + 1)[0]
    cell.innerHTML = ''
  }
}
