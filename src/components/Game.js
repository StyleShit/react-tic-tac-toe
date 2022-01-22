import useGame from '../hooks/useGame';
import PlayerRenderer from './PlayerRenderer';
import Board from './ui/Board/Board';
import Button from './ui/Button';
import Heading from './ui/Heading';

export default function Game() {
	const { board, assignCell, reset, winner, gameOver } = useGame( 3 );

	return (
		<>
			<Board>
				{
					board.map( ( row, rowIndex ) => (
						<Board.Row key={ rowIndex }>
							{
								row.map( ( cell, cellIndex ) => (
									<Board.Cell key={ cellIndex } onClick={ () => assignCell( { row: rowIndex, cell: cellIndex } ) }>
										<PlayerRenderer player={ cell } />
									</Board.Cell>
								) )
							}
						</Board.Row>
					) )
				}
			</Board>

			{ gameOver &&
				<Heading as="h2">
					{ winner ? `${ winner.toUpperCase() } is the winner!` : `It's a tie!` }
				</Heading>
			}

			<Button onClick={ reset }>Reset</Button>
		</>
	);
}
