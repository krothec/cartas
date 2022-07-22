import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { CardsContextProvider } from './context/cardsContext';
import Main from './pages/main';
import Create from './pages/create';
import SetupBar from './pages/setupBar';

const App: React.FC = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CardsContextProvider>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="create" element={<Create />} />
					</Routes>
					<SetupBar />
				</CardsContextProvider>
				<GlobalStyle />
			</ThemeProvider>
		</Router>
	);
};

export default App;
