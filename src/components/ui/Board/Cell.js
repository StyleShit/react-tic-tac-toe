import { memo } from 'react';
import styled from 'styled-components';

const Cell = styled.div`
    height: var( --cell-size );
    width: var( --cell-size );
    padding: calc( var( --cell-size ) / 3 );
    cursor: pointer;

    &:not( :last-child ) {
        border-right: var( --border );
    }
`;

export default memo( Cell );
