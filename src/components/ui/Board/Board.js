import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { memo } from 'react';

const Board = styled.div`
    --size: ${ ( { size } ) => size };
    --cell-size: ${ ( { cellSize } ) => cellSize };
    --border: 2px solid #eef1ee;

    display: grid;
    grid-template-rows: repeat( var( --size ), 1fr );
    grid-template-columns: repeat( var( --size ), 1fr );
    width: max-content;
    background-color: #FFF;
    border-radius: 10px;
    padding: calc( var( --cell-size ) / 5 );
    box-sizing: border-box;
    box-shadow: 0 0 30px 1px rgba( 0,0,0,.1 );

    ${ ( { size } ) => css`   
        ${Cell}:not( :nth-child( ${ size }n ) ) {
            border-right: var( --border );
        }

        ${Cell}:not( :nth-child( n + ${ ( Math.pow( size, 2 ) - size + 1 ) } ) ) {
            border-bottom: var( --border );
        }
    `}
        
`;

Board.Cell = memo( Cell );

Board.propTypes = {
	size: PropTypes.number.isRequired,
	cellSize: PropTypes.string.isRequired,
};

Board.defaultProps = {
	size: 3,
	cellSize: '60px',
};

export default Board;
