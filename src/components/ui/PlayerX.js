import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bounce } from '../../shared/animations';

const PlayerX = styled.div`
    --size: ${ ( { size } ) => size };
    --clr-1: #2e70f6;
    --clr-2: #81e2d2;

    position: relative;
    height: var( --size );
    width: var( --size );
    animation: .3s ${ bounce } both ease-out;

    &::before {
        --anchor: calc( var( --size ) / 4 );

        content: '';
        display: block;
        position: relative;
        z-index: 1; 
        height: 100%;
        width: 100%;
        background-image: linear-gradient( 45deg, var( --clr-1 ), var( --clr-2 ) 80% );
        clip-path: polygon(
            var( --anchor ) 0,
            50% var( --anchor ),
            calc( 100% - var( --anchor ) ) 0,
            100% var( --anchor ),
            calc( 100% - var( --anchor ) ) 50%,
            100% calc( 100% - var( --anchor ) ),
            calc( 100% - var( --anchor ) ) 100%,
            50% calc( 100% - var( --anchor ) ),
            var( --anchor ) 100%,
            0 calc( 100% - var( --anchor ) ),
            50% var( --anchor ),
            var( --anchor ) 50%,
            0 var( --anchor )
        );
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 0;
        width: var( --size );
        height: calc( var( --size ) / 3 );
        border-radius: 100%;
        background-image: radial-gradient( ellipse 100% 100%, var( --clr-1 ), transparent );
        filter: blur( 7px );
        transform: translate( -50%, 100% );
    }
`;

PlayerX.propTypes = {
	size: PropTypes.string,
};

PlayerX.defaultProps = {
	size: '60px',
};

export default PlayerX;
