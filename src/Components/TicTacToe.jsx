import React, { useState } from 'react'
import '../AStyles/TicTacToe.css'

const TicTacToe = () => {

    const [turn, setTurn] = useState('❌')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState(false)
    const [selectPlayer, setSelectPlayer] = useState(true)
    const [showError, setShowError] = useState(false)

    const CheckForWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''
                ) {
                    //do nothind
                }
                else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]])
                }
                // else if (
                // ) {
                //     setLooser(true)
                // }
            })
        }
    }

    const handleClick = (num) => {

        if (cells[num] !== '') {
            setShowError(true)
            return;
        }
        let squares = [...cells]

        if (turn === "❌") {
            squares[num] = "❌";
            setTurn("⭕")
        } else {
            squares[num] = "⭕";
            setTurn("❌")
        }
        CheckForWinner(squares)
        setCells(squares)

    }

    const handleRestart = () => {
        setWinner(null)
        setCells(Array(9).fill(''))
        if (winner) {
            setTurn(winner)
        }
        else {
            setSelectPlayer(true)
        }
    }

    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }

    console.log();

    return (
        <div className='TicTacToe_main'>
            {
                showError
                &&
                <div className="error_double_click">
                    <>Already Clicked!</>
                    <button onClick={() => setShowError(false)}>OKAY</button>
                </div>
            }
            <div className="cover_main_tictactoe">
                Tic Tac Toe
            </div>
            {
                selectPlayer ?
                    <div className="player_selection">
                        <div className="player_one_heading">
                            Please Select Player One:
                        </div>
                        <div className="tow_btns_for_player">
                            <button onClick={() => { setSelectPlayer(false); setTurn("⭕") }}>⭕</button>
                            <button onClick={() => { setSelectPlayer(false); setTurn("❌") }}>❌</button>
                        </div>
                    </div>
                    :
                    <>
                        <div className='left_tictactoe'>
                            <div className="turn_heading">
                                {
                                    winner ?
                                        <>Congratulations 🎉</>
                                        :
                                        <>Now it is  : {turn}'s Turn!</>
                                }
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <Cell num={0} />
                                        <Cell num={1} />
                                        <Cell num={2} />
                                    </tr>
                                    <tr>
                                        <Cell num={3} />
                                        <Cell num={4} />
                                        <Cell num={5} />
                                    </tr>
                                    <tr>
                                        <Cell num={6} />
                                        <Cell num={7} />
                                        <Cell num={8} />
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="right_side_tictactoe">
                            {
                                winner ?
                                    <>
                                        <p className='winner_text'>{winner} is the winner</p>
                                        <button className='play_again_button' onClick={handleRestart}>
                                            Play Again
                                        </button>
                                    </>
                                    :

                                    <button className='play_again_button' onClick={handleRestart}>
                                        Play Again
                                    </button>
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default TicTacToe