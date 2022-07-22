import { useContext } from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShieldIcon from '@mui/icons-material/Shield';
import FlareIcon from '@mui/icons-material/Flare';
import { CardsContext } from '../../context/cardsContext';
import CustomCard from '../../components/card';
import Button from '../../components/button';
import { BoxCard, InLineButtons, Div } from './style';

const Main: React.FC = () => {
	const context = useContext(CardsContext);

	return (
		<>
			<h1>Deck inicial</h1>
			<h2>
				{' '}
				Legenda: <br />
				<FlashOnIcon /> Ataque
				<br />
				<ShieldIcon /> Defesa
				<br />
				<FlareIcon /> Custo de mana
				<br />
			</h2>
			<Div>
				{context.listCards.map(card => (
					<BoxCard>
						<CustomCard card={card} key={card.id.toString()} />
						<InLineButtons>
							<Button
								title="Excluir"
								height="45px"
								width="50px"
								onClick={() => context.onDeleteCard(card.id)}
								className="actionButton"
							/>
							<Button
								title="Editar"
								height="45px"
								width="50px"
								onClick={() => context.onEditCard(card.id)}
								className="actionButton"
							/>
						</InLineButtons>
					</BoxCard>
				))}
			</Div>
		</>
	);
};

export default Main;
