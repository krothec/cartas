import { Tooltip } from '@mui/material';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { SetupBox } from './style';
import { useContext } from 'react';
import { CardsContext } from '../../context/cardsContext';

const SetupBar: React.FC = () => {
	const navigate = useNavigate();
	const context = useContext(CardsContext);

	const handleNavigate = (route: string) => {
		context.setRoute(route);
		navigate(`/${route}`);
	};

	return (
		<SetupBox>
			{context.route === '' && (
				<Tooltip title="Adicionar cards ao deck" placement="right">
					<Button
						title="✚"
						height="60px"
						width="60px"
						radius="50px"
						onClick={() => handleNavigate('create')}
						className="glow"
						margin="1rem"
					/>
				</Tooltip>
			)}
			{context.route !== '' && (
				<Tooltip title="Voltar ao deck de cards" placement="right">
					<Button
						title="←"
						height="60px"
						width="60px"
						radius="50px"
						onClick={() => handleNavigate('')}
						margin="1rem"
						className="glow"
					/>
				</Tooltip>
			)}
		</SetupBox>
	);
};

export default SetupBar;
