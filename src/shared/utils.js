/**
 * Generate an empty 2d array.
 *
 * @param {Number} boardSize - Array dimensions.
 *
 * @return {Array[]}
 */
export function generateEmptyBoard( boardSize ) {
	const array = [];

	for ( let i = 0; i < boardSize; i++ ) {
		array[ i ] = [];

		for ( let j = 0; j < boardSize; j++ ) {
			array[ i ][ j ] = null;
		}
	}

	return array;
}

/**
 * Get a winner from a board.
 *
 * @param {Array[]} board - Board as a 2d array.
 *
 * @return {String|null} - Winner value or `null`.
 */
export function getWinner( board ) {
	// Check rows & cols.
	for ( let i = 0; i < board.length; i++ ) {
		const row = board[ i ];

		if ( arrayHasEqualValues( row ) ) {
			return row[ 0 ];
		}

		const col = getColumn( board, i );

		if ( arrayHasEqualValues( col ) ) {
			return col[ 0 ];
		}
	}

	// Check LTR diagonal.
	const diagLTR = getDiagonal( board, 'ltr' );

	if ( arrayHasEqualValues( diagLTR ) ) {
		return diagLTR[ 0 ];
	}

	// Check RTL diagonal.
	const diagRTL = getDiagonal( board, 'rtl' );

	if ( arrayHasEqualValues( diagRTL ) ) {
		return diagRTL[ 0 ];
	}

	return null;
}

/**
 * Get a column as array from a 2d array.
 *
 * @param {Array[]} array - Array to get the column from.
 * @param {Number} col - Column id.
 *
 * @return {Array}
 */
export function getColumn( array, col ) {
	return Array( array.length ).fill( null ).map( ( value, row ) => array[ row ][ col ] );
}

/**
 * Get a diagonal as array from a 2d array.
 *
 * @param {Array[]} array - Array to get the diagonal from.
 * @param {'rtl'|'ltr'} direction - Diagonal direction (starting from top, LTR or RTL).
 *
 * @returns {Array}
 */
export function getDiagonal( array, direction = 'ltr' ) {
	const size = array.length;

	return Array( size ).fill( null ).map( ( value, i ) => {
		const index = ( direction === 'ltr' ) ? i : size - i - 1;

		return array[ i ][ index ];
	} );
}

/**
 * Check if all array values are the same (except nulls).
 *
 * @param {Array} array - Array to check.
 *
 * @return {boolean}
 */
export function arrayHasEqualValues( array ) {
	return array[ 0 ] !== null && ( new Set( array ) ).size === 1;
}
