import { memo } from 'react';
import PropTypes from 'prop-types';
import PlayerO from './ui/PlayerO';
import PlayerX from './ui/PlayerX';

function PlayerRenderer( { player } ) {
	switch ( player ) {
		case 'x':
			return <PlayerX />;

		case 'o':
			return <PlayerO />;

		default:
			return null;
	}
}

PlayerRenderer.propTypes = {
	player: PropTypes.oneOf( [ 'x', 'o', null ] ),
};

export default memo( PlayerRenderer );
