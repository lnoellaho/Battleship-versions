import React, { Component } from 'react'
import Score from './score'
import Header from './header'

const EMPTY = 0
const SHIP = 1
const MISS = 2
const HIT = 3

const HORIZONTAL = 0
const VERTICAL = 1


class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
            board: this.setBoard(),
            ships:  [
                    {size: 5, row: 0, col: 0, orientation: 0},
                    {size: 4, row: 0, col: 0, orientation: 0},
                    {size: 4, row: 0, col: 0, orientation: 0},
                    {size: 3, row: 0, col: 0, orientation: 0},
                    {size: 3, row: 0, col: 0, orientation: 0},
                    {size: 2, row: 0, col: 0, orientation: 0},
                    {size: 2, row: 0, col: 0, orientation: 0},
                    {size: 1, row: 0, col: 0, orientation: 0},
                    ],
            torpedos: 25,
            hits: 0
        }
    }

    componentWillMount() {
        this.placeShips()

        console.log(this.state.board);
    }

    // The Function creates a two dimensional array in the board state
    setBoard() {
        let board = []

        for (var row = 0; row < 10; row++) {
            board[row] = []

            for(let col = 0; col < 10; col++) {
                board[row][col] = EMPTY
            }
        }

        // console.log(board);

        return board
    }

    placeShips() {
        let ships = this.state.ships

        for(let i = 0; i < ships.length; i++) {
            const opt = ships[i]

            console.log("Size:", opt.size, "Count:", opt.count);

            // for(let i = 0; i < opt.count; i++) {
            //     this.placeShip(opt.size)
            // }
            this.placeShip(opt.size)
        }
    }


//This function grabs the position of the
    placeShip(size) {
        // console.log("setting ship of size:", size);
        const board = this.state.board

        let orientation = Math.floor(Math.random() * 2)
        let row = Math.floor(Math.random()*10)
        let col = Math.floor(Math.random()*10)
        let checkSpace = this.checkSpace(board, row, col, size, orientation)

        if (checkSpace === false) {
            return this.placeShip(size)
        } else {
            for (let i = 0; i < size; i++) {

                if (orientation === HORIZONTAL) {

                    board[row][col + i] = SHIP


                } else {

                    board[row + i][col] = SHIP

                }
            }
        }
        this.setState({
            board: board,
        })
    }

    checkSpace(board, row, col, size, orientation){
        for(let i = 0; i < size; i++) {

            if(board[row][col] === SHIP) {
                return false

            } else if (orientation === HORIZONTAL) {

                if (col + size >= 10) {
                    return false

                } else if (board[row][col + i] === SHIP) {
                    return false

                    // horizontal right buffer
                } if ((col + size) < 10) {
                    if (board[row][col + size] === SHIP) {
                        return false
                    }
                    if((row - 1) >= 0) {
                        if (board[row - 1][col + size]) {
                            return false
                        }
                    } if(row + 1 < 10) {
                        if (board[row + 1][col + size] === SHIP) {
                            return false
                        }
                    }
                    // horizontal left buffer
                } if ((col - 1) >= 0) {
                    if (board[row][col - 1] === SHIP) {
                        return false
                    } if((row - 1) >= 0) {
                        if(board[row - 1][col -1] === SHIP) {
                            return false
                        }
                    } if((row + 1) < 10) {
                        if(board[row + 1][col - 1] === SHIP) {
                            return false
                        }
                    }
                    // horizontal top buffer
                } if ((row - 1) >= 0) {
                    if (board[row - 1][col + i] === SHIP) {
                        return false
                    }if ((col + size + 1) < 10) {
                        if (board[row - 1][col + size] === SHIP) {
                            return false
                        }
                    }if((col - 1) >= 0) {
                        if (board[row - 1][col - 1] === SHIP) {
                            return false
                        }
                    }

                    // horizontal bottom buffer
                } if ((row + 1) < 10) {
                    if (board[row + 1][col + i] === SHIP) {
                        return false
                    }if ((col + size + 1) < 10) {
                        if (board[row + 1][col + size] === SHIP) {
                            return false
                        }
                    }if((col - 1) >= 0) {
                        if (board[row + 1][col - 1] === SHIP) {
                            return false
                        }
                    }
                }


            } else if (orientation === VERTICAL) {

                if (row + size >= 10) {
                    return false

                } else if(board[row + i][col] === SHIP) {
                    return false
                    //vertical right buffer
                } if ((col + 1) < 10) {
                    if (board[row + i][col + 1] === SHIP) {
                        return false
                    }
                    if((row - 1) >= 0) {
                        if (board[row-1][col + 1]) {
                            return false
                        }
                    } if(row + 1 < 10) {
                        if (board[row + size][col + 1] === SHIP) {
                            return false
                        }
                    }
                    // vertical left buffer
                } if ((col - 1) >= 0) {
                    if (board[row + i][col - 1] === SHIP) {
                        return false
                    } if((row - 1) >= 0) {
                        if(board[row -1][col-1] === SHIP) {
                            return false
                        }
                    } if((row + 1) < 10) {
                        if(board[row + size][col - 1] === SHIP) {
                            return false
                        }
                    }
                    // vertical top buffer
                } if ((row - 1) >= 0) {
                    if (board[row -1][col] === SHIP) {
                        return false
                    }if ((col + 1) < 10) {
                        if (board[row-1][col + 1] === SHIP) {
                            return false
                        }
                    }if((col - 1) >= 0) {
                        if (board[row -1][col-1] === SHIP) {
                            return false
                        }
                    }

                    // vertical bottom buffer
                } if ((row + size) < 10) {
                    if (board[row + size][col] === SHIP) {
                        return false
                    }if ((col + 1) < 10) {
                        if (board[row + size][col + 1] === SHIP) {
                            return false
                        }
                    }if((col - 1) >= 0) {
                        if (board[row +size][col - 1] === SHIP) {
                            return false
                        }
                    }
                }
            }
            else {
                return true
            }
        }
    }


    handleClick(row, col) {
        // console.log("row:", row, "col:", col);

        let { torpedos, hits, board } = this.state

        if(torpedos <= 0) {
            alert("Game Over Sucker")

            return
        }

        if(board[row][col] === SHIP) {
            console.log("hit");
            board[row][col] = HIT
            torpedos--
            hits++
        } else if(board[row][col] === EMPTY) {
            console.log("miss");
            board[row][col] = MISS
            torpedos--
        } else {
            alert('Choose a different square')
            return
        }

        console.log("torpedos:", torpedos)
        console.log(board)

//checks for ships sunk


        this.setState({
            board: board,
            torpedos: torpedos,
            hits: hits
        })
    }

    renderColumn(row) {
        const { board } = this.state
        var column = []

        for (let col = 0; col < 10; col++) {
            let cssClass;

            if(board[row][col] === HIT) {
                cssClass = "hit"
            } else if(board[row][col] === MISS) {
                cssClass = "miss"
            } else {
                cssClass = "wave"
            }

            column.push(<td
                id={row+'_'+col}
                key={row+'_'+col}
                className={cssClass}
                onClick={this.handleClick.bind(this, row, col)}><div className="content"></div>
            </td>)
        }

        return column;
    }

    renderRows() {
        var rows = []

        for(let row = 0; row < 10; row++) {
            rows.push(<tr key={row}>{this.renderColumn(row)}</tr>)
        }

        return rows;
    }

    render() {
        return (
            <div className="container boardcontain">
                <Header />
                <div className="row">
                    <div className="col-12">
                        <table className="board">
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </table>
                    </div>
                </div>

                <Score torpedos ={this.state.torpedos} hits ={this.state.hits}/>

            </div>
        )
    }
}

export default Board

// //This function places One ship vertically two times. Two random numbers are created for the position of the ship to be placed. If the position is the same position as a buffer or a existing ship, it will not be placed.
// placeShipVertical() {
//     var buffer = "."
//
//     for (var g=0; g<3; g++){
//         var randomNumberColumn = (Math.floor(Math.random() * 10))
//         var randomNumberRow = (Math.floor(Math.random() * 10))
//
//         var newBoard = this.state.board
//
//         if(newBoard[randomNumberColumn][randomNumberRow] === SHIP || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
//             g--;
//         } else {
//             newBoard[randomNumberColumn][randomNumberRow] = SHIP
//             this.setState({board: newBoard})
//         }
//     }
// }
//
// // This function places a ship of Two-Block-Length at a random position three times. The buffer is created currently just for this function. The buffer will not allow any ships to be placed in the position of the buffer. Buffer is one block around the ship.
// placeShipTwoHorizontal() {
//     var buffer = "."
//
//     for (var g=0; g<3; g++){
//         var randomNumberColumn = (Math.floor(Math.random() * 8))
//         var randomNumberRow = (Math.floor(Math.random() * 10))
//
//         var newBoard = this.state.board
//
//         if(newBoard[randomNumberColumn][randomNumberRow] === ship || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
//             g--;
//         } else {
//             newBoard[randomNumberColumn][randomNumberRow]= ship
//             newBoard[randomNumberColumn+1][randomNumberRow]= ship
//
//             newBoard[randomNumberColumn][randomNumberRow+1]= buffer
//             newBoard[randomNumberColumn][randomNumberRow-1]= buffer
//
//             newBoard[randomNumberColumn+1][randomNumberRow+1]= buffer
//             newBoard[randomNumberColumn+1][randomNumberRow-1]= buffer
//
//             newBoard[randomNumberColumn+2][randomNumberRow]= buffer
//             newBoard[randomNumberColumn+2][randomNumberRow+1]= buffer
//             newBoard[randomNumberColumn+2][randomNumberRow-1]= buffer
//
//             if(randomNumberColumn > 1) {
//                 newBoard[randomNumberColumn-1][randomNumberRow]= buffer
//                 newBoard[randomNumberColumn-1][randomNumberRow+1]= buffer
//                 newBoard[randomNumberColumn-1][randomNumberRow-1]= buffer
//
//                 newBoard[randomNumberColumn-2][randomNumberRow]= buffer
//                 newBoard[randomNumberColumn-2][randomNumberRow+1]= buffer
//                 newBoard[randomNumberColumn-2][randomNumberRow-1]= buffer
//             } else if (randomNumberColumn == 1) {
//                 newBoard[randomNumberColumn-1][randomNumberRow]= buffer
//                 newBoard[randomNumberColumn-1][randomNumberRow+1]= buffer
//                 newBoard[randomNumberColumn-1][randomNumberRow-1]= buffer
//             }
//
//             this.setState({board: newBoard})
//         }
//     }
// }
//
// //This function places two ships vertically two times. Two random numbers are created for the position of the ship to be placed. If the position is the same position as a buffer or a existing ship, it will not be placed.
// placeThreeShipVertical() {
//     var ship = "S"
//     var buffer = "."
//
//     for (var g=0; g<2; g++){
//         var randomNumberColumn = (Math.floor(Math.random() * 10))
//         var randomNumberRow = (Math.floor(Math.random() * 8))
//
//         var newBoard = this.state.board
//
//         if(newBoard[randomNumberColumn][randomNumberRow] === ship
//         || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
//             g--;
//         } else {
//             newBoard[randomNumberColumn][randomNumberRow]= ship
//             newBoard[randomNumberColumn][randomNumberRow+1]= ship
//             newBoard[randomNumberColumn][randomNumberRow+2]= ship
//
//             this.setState({board: newBoard})
//         }
//     }
// }
//
// //This function places four ships horizontally two times. Two random numbers are created for the position of the ship to be placed. If the position is the same position as a buffer or a existing ship, it will not be placed.
// placeFourShipHorizontal() {
//     var ship = "S"
//     var buffer = "."
//
//     for (var g=0; g<2; g++){
//         var randomNumberColumn = (Math.floor(Math.random() * 7))
//         var randomNumberRow = (Math.floor(Math.random() * 10))
//
//         var newBoard = this.state.board
//
//         if(newBoard[randomNumberColumn][randomNumberRow] === ship
//         || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
//             g--;
//         } else {
//             newBoard[randomNumberColumn][randomNumberRow]= ship
//             newBoard[randomNumberColumn+1][randomNumberRow]= ship
//             newBoard[randomNumberColumn+2][randomNumberRow]= ship
//             newBoard[randomNumberColumn+3][randomNumberRow]= ship
//
//             this.setState({board: newBoard})
//         }
//     }
// }
//
// //This function places one ships vertically two times. Two random numbers are created for the position of the ship to be placed. If the position is the same position as a buffer or a existing ship, it will not be placed.
// placeFiveShipVertical() {
//     var ship = "S"
//     var buffer = "."
//
//     for (var g=0; g<1; g++){
//         var randomNumberColumn = (Math.floor(Math.random() * 10))
//         var randomNumberRow = (Math.floor(Math.random() * 6))
//
//         var newBoard = this.state.board
//
//         if(newBoard[randomNumberColumn][randomNumberRow] === ship
//         || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
//             g--
//         } else {
//             newBoard[randomNumberColumn][randomNumberRow]= ship
//             newBoard[randomNumberColumn][randomNumberRow+1]= ship
//             newBoard[randomNumberColumn][randomNumberRow+2]= ship
//             newBoard[randomNumberColumn][randomNumberRow+3]= ship
//             newBoard[randomNumberColumn][randomNumberRow+4]= ship
//
//             this.setState({board: newBoard})
//         }
//     }
// }
