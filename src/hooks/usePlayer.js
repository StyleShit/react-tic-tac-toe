import { useCallback, useState } from 'react';

export default function usePlayer( defaultPlayer = 'x' ) {
	const [ currentPlayer, setCurrentPlayer ] = useState( defaultPlayer );

	const toggleNextPlayer = useCallback( () => {
		setCurrentPlayer( ( prev ) => ( prev === 'x' ? 'o' : 'x' ) );
	}, [ setCurrentPlayer ] );

	const resetPlayer = useCallback( () => {
		setCurrentPlayer( defaultPlayer );
	}, [ setCurrentPlayer, defaultPlayer ] );

	return {
		currentPlayer,
		toggleNextPlayer,
		resetPlayer,
	};
}
