import styled from 'styled-components';
import Game from './components/Game';
import Heading from './components/ui/Heading';

const StyleApp = styled.div`
	font-family: Roboto;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	height: 100vh;
`;

function App() {
	return (
		<StyleApp>
			<Heading>Tic-Tac-Toe</Heading>
			<Game />
		</StyleApp>
	);
}

export default App;
