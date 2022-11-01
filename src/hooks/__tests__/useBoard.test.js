import { act, renderHook } from '@testing-library/react-hooks';
import useBoard from '../useBoard';

describe( 'useBoard()', () => {
	it( 'Should generate an empty virtual 2d board based on size', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useBoard( size ) );

		// Assert.
		expect( result.current.board ).toEqual( [ null, null, null, null, null, null, null, null, null ] );
	} );

	it( 'Should set a value to a specific cell', () => {
		// Arrange.
		const size = 3;
		const id = 0;
		const value = 'x';

		// Act.
		const { result } = renderHook( () => useBoard( size ) );

		act( () => {
			result.current.setCell( id, value );
		} );

		// Assert.
		expect( result.current.board ).toEqual( [ 'x', null, null, null, null, null, null, null, null ] );
	} );

	it( 'Should reset the whole board', () => {
		// Arrange.
		const size = 3;
		const id = 0;
		const value = 'x';

		// Act.
		const { result } = renderHook( () => useBoard( size ) );

		act( () => {
			result.current.setCell( id, value );
		} );

		act( () => {
			result.current.resetBoard();
		} );

		// Assert.
		expect( result.current.board ).toEqual( [ null, null, null, null, null, null, null, null, null ] );
	} );

	it( 'Should determine if the board is full', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useBoard( size ) );

		// Assert.
		expect( result.current.isBoardFull ).toBe( false );

		// Act.
		act( () => {
			for ( let i = 0; i < size * size; i++ ) {
				result.current.setCell( i, 'x' );
			}
		} );

		// Assert.
		expect( result.current.isBoardFull ).toBe( true );
	} );
} );
