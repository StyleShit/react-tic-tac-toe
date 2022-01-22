import { memo } from 'react';
import PropTypes from 'prop-types';
import PlayerO from './ui/PlayerO';
import PlayerX from './ui/PlayerX';

function PlayerRenderer( { player, ...rest } ) {
	switch ( player ) {
		case 'x':
			return <PlayerX { ...rest } />;

		case 'o':
			return <PlayerO { ...rest } />;

		default:
			return null;
	}
}

PlayerRenderer.propTypes = {
	player: PropTypes.oneOf( [ 'x', 'o', null ] ),
};

export default memo( PlayerRenderer );
