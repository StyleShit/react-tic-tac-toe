import styled from 'styled-components';

const Cell = styled.div`
    height: var( --cell-size );
    width: var( --cell-size );
    padding: calc( var( --cell-size ) / 3 );
    cursor: pointer;
`;

export default Cell;
