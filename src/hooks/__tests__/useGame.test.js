import { act, renderHook } from '@testing-library/react-hooks';
import useGame from '../useGame';

describe( 'useGame()', () => {
	it( 'Should toggle between players', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useGame( size ) );

		act( () => {
			result.current.assignCell( 0 );
		} );

		act( () => {
			result.current.assignCell( 1 );
		} );

		act( () => {
			result.current.assignCell( 4 );
		} );

		// Assert.
		expect( result.current.currentPlayer ).toBe( 'o' );

		expect( result.current.board[ 0 ] ).toBe( 'x' );
		expect( result.current.board[ 1 ] ).toBe( 'o' );
		expect( result.current.board[ 4 ] ).toBe( 'x' );
	} );

	it( 'Should block cell assignments to occupied cells', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useGame( size ) );

		act( () => {
			result.current.assignCell( 0 );
		} );

		act( () => {
			result.current.assignCell( 0 );
		} );

		// Assert.
		expect( result.current.board[ 0 ] ).toBe( 'x' );
		expect( result.current.currentPlayer ).toBe( 'o' );
	} );

	it( 'Should block cell assignments when game is over', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useGame( size ) );

		act( () => {
			result.current.assignCell( 0 );
			result.current.assignCell( 3 );
			result.current.assignCell( 1 );
			result.current.assignCell( 4 );
			result.current.assignCell( 2 );
		} );

		// Try to assign a cell after the game is over.
		act( () => {
			result.current.assignCell( 5 );
		} );

		// Assert.
		expect( result.current.board[ 5 ] ).toBe( null );
	} );

	it( 'Should reset the board & current player when resetting the game', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useGame( size ) );

		act( () => {
			result.current.assignCell( 0 );
		} );

		act( () => {
			result.current.reset();
		} );

		// Assert.
		expect( result.current.currentPlayer ).toBe( 'x' );
		expect( result.current.board ).toEqual( [ null, null, null, null, null, null, null, null, null ] );
	} );

	it( 'Should return the winner -- Row', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useGame( size ) );

		act( () => {
			result.current.assignCell( 0 );
			result.current.assignCell( 3 );
			result.current.assignCell( 1 );
			result.current.assignCell( 4 );
			result.current.assignCell( 2 );
		} );

		// Assert.
		expect( result.current.winner ).toBe( 'x' );
	} );

	it( 'Should return the winner -- Column', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useGame( size ) );

		act( () => {
			result.current.assignCell( 0 );
			result.current.assignCell( 1 );
			result.current.assignCell( 3 );
			result.current.assignCell( 2 );
			result.current.assignCell( 6 );
		} );

		// Assert.
		expect( result.current.winner ).toBe( 'x' );
	} );

	it( 'Should return the winner -- Top-left to bottom-right diagonal', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useGame( size ) );

		act( () => {
			result.current.assignCell( 0 );
			result.current.assignCell( 1 );
			result.current.assignCell( 4 );
			result.current.assignCell( 2 );
			result.current.assignCell( 8 );
		} );

		// Assert.
		expect( result.current.winner ).toBe( 'x' );
	} );

	it( 'Should return the winner -- Bottom-left to top-right diagonal', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useGame( size ) );

		act( () => {
			result.current.assignCell( 6 );
			result.current.assignCell( 0 );
			result.current.assignCell( 4 );
			result.current.assignCell( 1 );
			result.current.assignCell( 2 );
		} );

		// Assert.
		expect( result.current.winner ).toBe( 'x' );
	} );

	it( 'Should return a game-over flag when there is a winner', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useGame( size ) );

		act( () => {
			result.current.assignCell( 6 );
			result.current.assignCell( 0 );
			result.current.assignCell( 4 );
			result.current.assignCell( 1 );
			result.current.assignCell( 2 );
		} );

		// Assert.
		expect( result.current.gameOver ).toBe( true );
	} );

	it( 'Should return a game-over flag when there is a tie', () => {
		// Arrange.
		const size = 3;

		// Act.
		const { result } = renderHook( () => useGame( size ) );

		act( () => {
			result.current.assignCell( 0 );
			result.current.assignCell( 1 );
			result.current.assignCell( 2 );
			result.current.assignCell( 6 );
			result.current.assignCell( 7 );
			result.current.assignCell( 8 );
			result.current.assignCell( 3 );
			result.current.assignCell( 4 );
			result.current.assignCell( 5 );
		} );

		// Assert.
		expect( result.current.gameOver ).toBe( true );
	} );
} );
