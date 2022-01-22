import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { memo } from 'react';

const Button = styled.button`
    font-family: inherit;
    width: max-content;
    border: none;
    border-radius: 1000px;
    padding: 10px 20px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 rgba( 0,0,0,.3 );
    cursor: pointer;
    transition: .3s all;

    ${ ( { variant } ) => ( variant === 'primary' ) && css`
        color: #FFF;
        background-color: #2c6df6;

        &:hover {
            background-color: #114ecf;
        }
    `}
    
    ${ ( { variant } ) => ( variant === 'secondary' ) && css`
        color: #414c5d;
        background-color: #fbfefd;

        &:hover {
            background-color: #f0f0f0;
        }
    `}
`;

Button.propTypes = {
	variant: PropTypes.oneOf( [ 'primary', 'secondary' ] ),
};

Button.defaultProps = {
	variant: 'primary',
};

export default memo( Button );
