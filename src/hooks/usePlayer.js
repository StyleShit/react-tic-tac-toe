import { useCallback, useState } from 'react';

export default function usePlayer( defaultPlayer = 'x' ) {
	const [ currentPlayer, setCurrentPlayer ] = useState( defaultPlayer );

	// Toggle to the next player.
	const toggleNextPlayer = useCallback( () => {
		setCurrentPlayer( ( prev ) => ( prev === 'x' ? 'o' : 'x' ) );
	}, [ setCurrentPlayer ] );

	// Reset to the default player.
	const resetPlayer = useCallback( () => {
		setCurrentPlayer( defaultPlayer );
	}, [ setCurrentPlayer, defaultPlayer ] );

	return {
		currentPlayer,
		toggleNextPlayer,
		resetPlayer,
	};
}
