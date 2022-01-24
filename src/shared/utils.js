/**
 * Generate an empty "virtual" 2d array.
 *
 * @param {Number} boardSize - Array dimensions (will be squared).
 *
 * @return {Array}
 */
export function generateEmptyBoard( boardSize ) {
	const array = [];

	for ( let i = 0; i < Math.pow( boardSize, 2 ); i++ ) {
		array[ i ] = null;
	}

	return array;
}

/**
 * Extract rows, columns and diagonals as arrays from a virtual 2d array.
 *
 * @param {Array} board - Board as a virtual 2d array.
 *
 * @return { rows: Array, cols: Array, diags: Array };
 */
export function extractBoardParts( board ) {
	const size = Math.sqrt( board.length );

	const rows = [];
	const cols = [];
	const diags = [ [], [] ];

	for ( let i = 0; i < board.length; i += size ) {
		const iteration = i / size;

		cols[ iteration ] = [];
		rows[ iteration ] = [];

		// Calculate rows / cols
		for ( let j = 0; j < size; j++ ) {
			rows[ iteration ].push( board[ i + j ] );
			cols[ iteration ].push( board[ iteration + j * size ] );
		}

		// Calculate diagonals.
		diags[ 0 ].push( board[ i + iteration ] );
		diags[ 1 ].push( board[ i - iteration + size - 1 ] );
	}

	return {
		rows,
		cols,
		diags,
	};
}

/**
 * Get a winner from a board.
 *
 * @param {Array} board - Board as a virtual 2d array.
 *
 * @return {String|null} - Winner value or `null`.
 */
export function getWinner( board ) {
	const { rows, cols, diags } = extractBoardParts( board );

	for ( const part of [ ...rows, ...cols, ...diags ] ) {
		if ( arrayHasEqualValues( part ) ) {
			return part[ 0 ];
		}
	}

	return null;
}

/**
 * Check if all array values are the same (except nulls).
 *
 * @param {Array} array - Array to check.
 *
 * @return {boolean}
 */
export function arrayHasEqualValues( array ) {
	return array[ 0 ] !== null && array.every( ( value ) => value === array[ 0 ] );
}
