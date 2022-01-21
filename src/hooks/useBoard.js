import { useCallback, useState } from 'react';
import { generateEmptyBoard } from '../shared/utils';

export default function useBoard( size ) {
	const [ board, setBoard ] = useState( generateEmptyBoard( size ) );

	// Set a value to a specific cell.
	const setCell = useCallback( ( { row, cell, value } ) => {
		setBoard( ( prev ) => {
			const clone = [ ...prev ];

			clone[ row ][ cell ] = value;

			return clone;
		} );
	}, [] );

	// Reset the whoel board.
	const resetBoard = useCallback( () => {
		setBoard( generateEmptyBoard( size ) );
	}, [ size ] );

	// Determine if the board is full.
	const isBoardFull = board.reduce( ( isFull, row ) => {
		const isRowFull = ( row.filter( ( c ) => c !== null ).length === row.length );

		return isFull && isRowFull;
	}, true );

	return {
		board,
		setCell,
		resetBoard,
		isBoardFull,
	};
}
