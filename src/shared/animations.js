import { keyframes } from 'styled-components';

export const bounce = keyframes`
    0% {
        transform: scale( 0 );
    }

    50% {
        transform: scale( 1.2 );
    }

    100% {
        transform: scale( 1 );
    }
`;
