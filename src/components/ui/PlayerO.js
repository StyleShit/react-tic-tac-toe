import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bounce } from '../../shared/animations';

const PlayerO = styled.div`
    --size: ${ ( { size } ) => size || '60px' };
    --clr-1: #f37235;
    --clr-2: #f1db77;

    display: inline-block;
    position: relative;
    height: var( --size );
    width: var( --size );
    animation: .5s ${ bounce } both ease-out;

    &::before {
        --hole-size: calc( var( --size ) / 6 );

        content: '';
        display: block;
        position: relative;
        z-index: 1; 
        height: 100%;
        width: 100%;
        background-image: linear-gradient( 45deg, var( --clr-1 ), var( --clr-2 ) 70% );
        border-radius: 100%;
        mask-image: radial-gradient( circle var( --size ), transparent var( --hole-size ), #FFF calc( var( --hole-size ) + 1px ) );
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

PlayerO.propTypes = {
	size: PropTypes.string,
};

PlayerO.defaultProps = {
	size: '60px',
};

export default PlayerO;
