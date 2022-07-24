import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { CardsContext, CardsContextProvider } from './context/cardsContext';
import Main from './pages/main';
import Create from './pages/create';
import SetupBar from './pages/setupBar';
import Edit from './pages/edit';

const App: React.FC = () => {
	const context = useContext(CardsContext);
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CardsContextProvider>
					<SetupBar />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="create/" element={<Create />} />
						<Route path="edit/" element={<Edit card={context.card} />} />
					</Routes>
				</CardsContextProvider>
				<GlobalStyle />
			</ThemeProvider>
		</Router>
	);
};

export default App;
