import { act, renderHook } from '@testing-library/react-hooks';
import usePlayer from '../usePlayer';

describe( 'usePlayer()', () => {
	it( 'Should set the default player', () => {
		// Arrange.
		const defaultPlayer = 'x';
		const expected = 'x';

		// Act.
		const { result } = renderHook( () => usePlayer( defaultPlayer ) );

		// Assert.
		expect( result.current.currentPlayer ).toBe( expected );
	} );

	it( 'Should toggle to the next player', () => {
		// Arrange.
		const defaultPlayer = 'x';
		const expected = 'o';

		// Act.
		const { result } = renderHook( () => usePlayer( defaultPlayer ) );

		act( () => {
			result.current.toggleNextPlayer();
		} );

		// Assert.
		expect( result.current.currentPlayer ).toBe( expected );
	} );

	it( 'Should reset to the default player', () => {
		// Arrange.
		const defaultPlayer = 'x';

		// Act.
		const { result } = renderHook( () => usePlayer( defaultPlayer ) );

		act( () => {
			result.current.toggleNextPlayer();
		} );

		act( () => {
			result.current.resetPlayer();
		} );

		// Assert.
		expect( result.current.currentPlayer ).toBe( defaultPlayer );
	} );
} );
