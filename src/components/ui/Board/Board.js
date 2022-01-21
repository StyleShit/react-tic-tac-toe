import styled from 'styled-components';
import PropTypes from 'prop-types';
import Row from './Row';
import Cell from './Cell';

const Board = styled.div`
    --cell-size: ${ ( { cellSize } ) => cellSize };
    --border: 2px solid #eef1ee;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: max-content;
    background-color: #FFF;
    border-radius: 10px;
    padding: calc( var( --cell-size ) / 5 );
    box-sizing: border-box;
    box-shadow: 0 0 30px 1px rgba( 0,0,0,.1 );
`;

Board.Row = Row;
Board.Cell = Cell;

Board.propTypes = {
	cellSize: PropTypes.string,
};

Board.defaultProps = {
	cellSize: '60px',
};

export default Board;
