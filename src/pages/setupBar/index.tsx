import { Paper } from '@mui/material';
import Button from '../../components/button';
import Input from '../../components/input';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useContext, useState } from 'react';
import { CardsContext } from '../../context/cardsContext';

const SetupBar: React.FC = () => {
	const navigate = useNavigate();
	const context = useContext(CardsContext);
	const [term, setTerm] = useState('');

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		context.onSearchCard(e);
		setTerm(e.target.value);
	};
	return (
		<>
			<Paper
				sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
				elevation={3}
			>
				<Button
					title="Criar carta"
					height="45px"
					width="100px"
					onClick={() => navigate('/create')}
				/>
				<div className="form-row">
					<label>Nome</label>
					<Input
						type="search"
						placeholder="Nome da carta"
						name="name"
						value={term}
						onChange={onInputChange}
					/>
				</div>
			</Paper>
		</>
	);
};

export default SetupBar;
