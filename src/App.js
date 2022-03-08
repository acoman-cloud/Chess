import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css'

const initialState = [
	[24, 25, 0, 0, 0, 0, 15, 14],
	[23, 25, 0, 0, 0, 0, 15, 13],
	[22, 25, 0, 0, 0, 0, 15, 12],
	[21, 25, 0, 0, 0, 0, 15, 11],
	[26, 25, 0, 0, 0, 0, 15, 16],
	[22, 25, 0, 0, 0, 0, 15, 12],
	[23, 25, 0, 0, 0, 0, 15, 13],
	[24, 25, 0, 0, 0, 0, 15, 14],
]

function App() {
	const [turn, setTurn] = useState('White')
	const [board, setBoard] = useState(initialState)
	const [selected, setSelected] = useState()

	function onClick(e) {
		let col, row
		if (!selected) {
			col = e.target.dataset.col;
			row = e.target.dataset.row;
			setSelected(board[col][row])
			board[col].splice(row, 1, 0)
		}
		else if (selected) {
			col = e.target.dataset.col;
			row = e.target.dataset.row;
			board[col].splice(row, 1, selected)
			setSelected()
			if (turn === 'White') setTurn('Black')
			else setTurn('White')
		}
	}
	
	return (
		<div className='app'>
			{turn ? <h1>Turn: {turn} </h1> : <h1>You Win!!</h1>}
			<div className='board'>
				{board.map((x, index) => {
					return (
						<div>
							{x.map((subX, xIndex) => {
								let row = `Row${xIndex + 1}`
								let diag = '', side = ''
								if (index % 2 === 1 && xIndex % 2 === 0) diag = 'offWhite'
								if (index % 2 === 0 && xIndex % 2 === 1) diag = 'offWhite'
								if (subX > 20) side = 'Black'
								else side = 'White'
								return <h2 className={row + ' ' + diag + ' ' + side}
									key={index+xIndex}
									data-col={index}
									data-row={xIndex}
									onClick={onClick}> {
										subX % 10 === 6 ? 'K'
											: subX % 10 === 1 ? 'Q'
												: subX % 10 === 2 ? 'B'
													: subX % 10 === 3 ? 'Kn'
														: subX % 10 === 4 ? 'R'
															: subX % 10 === 5 ? 'P'
																: ' '
									} </h2>
							})}
						</div>
					)
				})}
			</div>
		</div>
	);
}

export default App;