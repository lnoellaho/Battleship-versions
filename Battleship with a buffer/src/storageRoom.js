


const SHIP = 1
for (i=0; i<5; i++) {
    var random= Math.floor(Math.random()*board.length-1)
    var row= board[random]
    var position =
    row.push(SHIP)
}
placeShip(){
    var randomNumberColumn = Math.floor(Math.random() * 9)
    var randomNumberRow = Math.floor(Math.random() * 9)
    var newBoard = this.state.board;
    newBoard[randomNumberColumn][randomNumberRow] = 1;
    this.setState({board: newBoard})
}


placeShip() {
    var ship = "O"
    for (var g=0; g<5; g++){
    var randomNumberColumn = (Math.floor(Math.random() * 9))
    var randomNumberRow = (Math.floor(Math.random() * 9))
    var newBoard = this.state.board
    if(newBoard[randomNumberColumn][randomNumberRow] === ship) {
        g--;
    } else {
    newBoard[randomNumberColumn][randomNumberRow]= ship
    this.setState({board: newBoard})
    }
    }
}

constructor(props){
    super(props){
        this.state = {

        }
    }
}
}

if(newBoard[randomNumberColumn][randomNumberRow] === ship || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
    g--;
} else {
    newBoard[randomNumberColumn][randomNumberRow]= ship
    this.setState({board: newBoard})
}

e.target.innerHTML= this.state.board[e.target.value][e.target.rows]

{this.props.board[i][rowNums]}

for(var i=0; i<5; i++) {
    if(newBoard[randomNumberColumn][randomNumberRow] === this.state.ships[i] || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
        g--;
    } else {
        newBoard[randomNumberColumn][randomNumberRow]= ship
        this.setState({board: newBoard})
    }
}

this.state.ships.map(function(i) {
    return
    if(newBoard[randomNumberColumn][randomNumberRow] === i || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
        g--;
    } else {
        newBoard[randomNumberColumn][randomNumberRow]= ship
        this.setState({board: newBoard})
    }
})

for(let b= -1; b < 1; b++) {
    //horizontal
    board[row + b][col - 1] = buffer
    board[row + b][col + size] = buffer
    board[row + b][col +i] = buffer

    //vertical
    board[row + size][col + b] = buffer
    board[row - 1][col + b] = buffer
    board[row + i][col + b] = buffer

}



                            horizontal


 [row - 1] [col - 1]       top [row - 1][col + i]                [row - 1] [col + size]

left [row][col - 1]          ship [row][col + i]                right [row][col + size]

[row + 1][col - 1]          bottom [row + 1][col + i]             [row + 1] [col + size]




                            vertical


[row -1] [col-1]             [row -1][col]           [row-1][col + 1]

left[row + i][col - 1]      ship[row + i][col]      right[row + i][col + 1]

[row +size] [col - 1]         [row + size][col]       [row + size][col + 1]





for(let b= -1; b < 1; b++) {
    //horizontal
    if (col > 0) {
    board[row + b][col - 1] = BUFFER
    board[row + b][col + size] = BUFFER
    board[row + b][col +i] = BUFFER

    } else {
        board[row + b][col + size] = BUFFER
        board[row + b][col +i] = BUFFER
    }
}




for(let b= -1; b < 1; b++) {
    board[row + size][col + b] = BUFFER
    board[row - 1][col + b] = BUFFER
    board[row + i][col + b] = BUFFER
}






placeBuffer(board, row, col, size, orientation) {
    for (let i = 0; i < size; i++) {

        if (orientation === HORIZONTAL) {
            //horizontal
            if (col > 0 && row > 0) {

                for(let b= -1; b < 1; b++) {
                    board[row + b][col - 1] = BUFFER
                    board[row + b][col + size] = BUFFER
                    board[row + b][col +i] = BUFFER
                }

            } else {

                for(let b = 0; b < 1; b++) {
                board[row + b][col + size] = BUFFER
                board[row + b][col +i] = BUFFER
                }
            }

        } else {
        //horizontal
            if (col > 0 && row > 0) {

                for(let b= -1; b < 1; b++) {
                    board[row + size][col + b] = BUFFER
                    board[row - 1][col + b] = BUFFER
                    board[row + i][col + b] = BUFFER
                }

            } else {

                for(let b=0; b < 1; b++) {
                    board[row + size][col + b] = BUFFER
                    board[row - 1][col + b] = BUFFER
                    board[row + i][col + b] = BUFFER
                }
            }
        }
    }
}



    checkSpace(board, row, col, size, orientation){
        for(let i = 0; i < size; i++) {

            if(board[row][col] === SHIP) {
                return false

            } else if (orientation === HORIZONTAL) {

                if (col + size > 10) {
                    return false

                } else if (board[row][col + i] === SHIP || board[row + 1][col + i] === SHIP ) {
                    return false
                }
            } else if (orientation === VERTICAL) {

                if (row + size > 10) {
                    return false

                } else if(board[row + i][col] === SHIP ) {
                    return false
                }

            } else {
                return true
            }
        }
    }










checkSpace(board, row, col, size, orientation){
    for(let i = 0; i < size; i++) {

        if(board[row][col] === SHIP) {
            return false

        } else if (orientation === HORIZONTAL) {

            if (col + size > 10) {
                return false

            } else if (board[row][col + i] === SHIP) {
                return false

// horizontal right buffer
            } else if ((col + size + 1) > 10) {
                if (board[row][col + size] === SHIP) {
                    return false
                }
                else if((row - 1) >= 0) {
                    if (board[row - 1][col + size]) {
                        return false
                    }
                } else if(row + 1 < 10) {
                    if (board[row + 1][col + size] === SHIP) {
                        return false
                    }
                }
// horizontal left buffer
            } else if ((col - 1) >= 0) {
                if (board[row][col - 1] === SHIP) {
                    return false
                } else if((row - 1) >= 0) {
                    if(board[row - 1][cols -1] === SHIP) {
                        return false
                    }
                } else if((row + 1) < 10) {
                    if(board[row + 1][col - 1] === SHIP) {
                        return false
                    }
                }
// horizontal top buffer
            } else if ((row - 1) >= 0) {
                if (board[row - 1][col + i] === SHIP) {
                    return false
                }
// horizontal bottom buffer
            } else if ((row + 1) < 10) {
                if (board[row + 1][col + i] === SHIP) {
                    return false
                }
            }


        } else if (orientation === VERTICAL) {

            if (row + size > 10) {
                return false

            } else if(board[row + i][col] === SHIP) {
                return false
            }

        } else {
            return true
        }
    }
}

Math.floor(Math.random() * 1)
