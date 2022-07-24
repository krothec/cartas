import { ChangeEvent, useContext, useState } from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShieldIcon from '@mui/icons-material/Shield';
import FlareIcon from '@mui/icons-material/Flare';
import Input from '../../components/input';
import { CardsContext } from '../../context/cardsContext';
import { Div, DivHeader, Subtitle, Paragraph } from './style';
import SetupBar from '../setupBar';

const Header: React.FC = () => {
	const context = useContext(CardsContext);
	const [term, setTerm] = useState('');

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		context.onSearchCard(e);
		setTerm(e.target.value);
	};
	return (
		<Div>
			<DivHeader>
				<h1>Meu Deck</h1>
				<Subtitle>
					<h2>Legenda: </h2>
					<Paragraph aria-label="ícone de Raio representa o número de ataque">
						<FlashOnIcon /> <span> Ataque</span>
					</Paragraph>
					<Paragraph aria-label="ícone de Escudo representa o número de defesa">
						<ShieldIcon /> <span> Defesa</span>
					</Paragraph>
					<Paragraph aria-label="ícone de clarão representa o custo de mana">
						<FlareIcon /> <span> Custo de mana</span>
					</Paragraph>
				</Subtitle>
			</DivHeader>
			<div className="form-row customized">
				<label className="labelCustom">Buscar carta:</label>
				<Input
					type="search"
					placeholder="Classe da carta"
					name="name"
					value={term}
					onChange={onInputChange}
					padding="8px"
					radius="25px"
					border="solid 0.5px black"
				/>
			</div>
		</Div>
	);
};

export default Header;
