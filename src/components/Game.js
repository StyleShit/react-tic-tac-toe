import useGame from '../hooks/useGame';
import PlayerRenderer from './PlayerRenderer';
import Board from './ui/Board/Board';
import Button from './ui/Button';
import Heading from './ui/Heading';

const boardSize = 3;

export default function Game() {
	const { board, assignCell, reset, winner, gameOver, currentPlayer } = useGame( boardSize );

	return (
		<>
			<Heading as="h2">
				Current Player: <PlayerRenderer player={ currentPlayer } size=".8em" />
			</Heading>

			<Board size={ boardSize }>
				{
					board.map( ( cell, index ) => (
						<Board.Cell key={ index } onClick={ () => assignCell( index ) }>
							<PlayerRenderer player={ cell } />
						</Board.Cell>
					) )
				}
			</Board>

			{ gameOver &&
				<Heading as="h2">
					{ winner
						? <><PlayerRenderer player={ winner } size=".8em" /> is the winner!</>
						: `It's a tie!`
					}
				</Heading>
			}

			<Button onClick={ reset }>Reset</Button>
		</>
	);
}
