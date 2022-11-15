import { useCallback, useState } from 'react';
import { generateEmptyBoard } from '../shared/utils';

export default function useBoard( size ) {
	const [ board, setBoard ] = useState( generateEmptyBoard( size ) );

	const setCell = useCallback( ( id, value ) => {
		setBoard( ( prev ) => {
			const clone = [ ...prev ];

			clone[ id ] = value;

			return clone;
		} );
	}, [] );

	const resetBoard = useCallback( () => {
		setBoard( generateEmptyBoard( size ) );
	}, [ size ] );

	const isBoardFull = board.every( ( value ) => value !== null );

	return {
		board,
		setCell,
		resetBoard,
		isBoardFull,
	};
}
