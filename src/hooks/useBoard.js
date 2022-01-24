import { useCallback, useState } from 'react';
import { generateEmptyBoard } from '../shared/utils';

export default function useBoard( size ) {
	const [ board, setBoard ] = useState( generateEmptyBoard( size ) );

	// Set a value to a specific cell.
	const setCell = useCallback( ( id, value ) => {
		setBoard( ( prev ) => {
			const clone = [ ...prev ];

			clone[ id ] = value;

			return clone;
		} );
	}, [] );

	// Reset the whoel board.
	const resetBoard = useCallback( () => {
		setBoard( generateEmptyBoard( size ) );
	}, [ size ] );

	// Determine if the board is full.
	const isBoardFull = board.every( ( value ) => value !== null );

	return {
		board,
		setCell,
		resetBoard,
		isBoardFull,
	};
}
