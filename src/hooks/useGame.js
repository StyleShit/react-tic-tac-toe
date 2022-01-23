import { useCallback, useEffect } from 'react';
import { getWinner } from '../shared/utils';
import useBoard from './useBoard';
import usePlayer from './usePlayer';

export default function useGame( boardSize = 3 ) {
	const { board, setCell, resetBoard, isBoardFull } = useBoard( boardSize );
	const { currentPlayer, resetPlayer, toggleNextPlayer } = usePlayer( 'x' );

	const winner = getWinner( board );
	const gameOver = ( !! winner || isBoardFull );

	// Assign the current player's value to a specific cell.
	const assignCell = useCallback( ( id ) => {
		if ( gameOver || board[ id ] ) {
			return;
		}

		setCell( id, currentPlayer );
		toggleNextPlayer();
	}, [ board, currentPlayer, gameOver ] );

	// Reset the game.
	const reset = useCallback( () => {
		resetBoard();
		resetPlayer();
	}, [] );

	// Reset the game each time the board size changes.
	useEffect( () => {
		reset();
	}, [ boardSize ] );

	return {
		board,
		assignCell,
		currentPlayer,
		reset,
		winner,
		gameOver,
	};
}
