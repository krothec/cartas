import { useContext } from 'react';
import { CardsContext } from '../../context/cardsContext';
import CustomCard from '../../components/card';
import { BoxCard, InLineButtons, Div } from './style';
import Header from '../header';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Edit } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';

const Main: React.FC = () => {
	const context = useContext(CardsContext);

	return (
		<>
			<Header />
			<Div>
				{context.listCards.map(card => (
					<BoxCard>
						<CustomCard card={card} key={card.id.toString()} />
						<InLineButtons>
							<IconButton
								className="actionButton"
								aria-label="Editar card"
								color="info"
								onClick={() => context.onEditCard(card)}
								size="small"
							>
								<EditIcon />
							</IconButton>
							<IconButton
								className="actionButton"
								aria-label="Deletar card"
								color="error"
								onClick={() => context.onDeleteCard(card.id)}
								size="small"
							>
								<DeleteIcon />
							</IconButton>
						</InLineButtons>
					</BoxCard>
				))}
			</Div>
			<Routes>
				<Route path="edit/" element={<Edit />} />
			</Routes>
		</>
	);
};

export default Main;
