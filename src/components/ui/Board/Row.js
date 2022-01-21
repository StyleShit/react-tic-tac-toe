import { memo } from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:not( :last-child ) {
        border-bottom: var( --border );
    }
`;

export default memo( Row );
