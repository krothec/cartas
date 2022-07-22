import React, { ChangeEvent, useContext, useState } from 'react';
import { ICard } from '../../interface';
import Input from '../../components/input';
import Button from '../../components/button';
import { CardsContext } from '../../context/cardsContext';
import CustomSelect from '../../components/select';
import { Type, Class } from '../../assets';
import { Div } from './style';

interface IProps {
	onAddCard?: (card: ICard) => void;
}

const initCard = {
	id: 0,
	name: '',
	description: '',
	attack: 0,
	def: 0,
	type: 0,
	class: '',
	image: '',
	mana: 0,
};

const CreateCard: React.FunctionComponent<IProps> = props => {
	const context = useContext(CardsContext);
	const [formValue, setFormValue] = useState(initCard);

	const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		context.setCard(formValue);
	};

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormValue({ ...formValue, [name]: value });
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		console.log('formValue', formValue);
		setFormValue({ ...formValue, [name]: value });
	};
	return (
		<Div className="card-form">
			<h1>Adicionar Card</h1>
			<form className="form-edit" onSubmit={onFormSubmit}>
				<div className="form-row">
					<label>Nome</label>
					<Input
						type="text"
						placeholder="Nome da carta"
						name="name"
						value={formValue.name}
						onChange={onInputChange}
					/>
				</div>

				<div className="form-row">
					<label>Descrição</label>
					<Input
						type="text"
						placeholder="Descrição da carta"
						name="description"
						value={formValue.description}
						onChange={onInputChange}
					/>
				</div>
				<div className="form-row">
					<label>Imagem</label>
					<Input
						type="text"
						placeholder="No formato 'http://site/imagem.jpeg'"
						name="image"
						value={formValue.image}
						onChange={onInputChange}
					/>
				</div>
				<div className="form-row">
					<label>Ataque (0 a 10)</label>
					<Input
						type="number"
						placeholder="please input number"
						name="attack"
						value={formValue.attack}
						onChange={onInputChange}
					/>
				</div>
				<div className="form-row">
					<label>Defesa (0 a 10)</label>
					<Input
						type="number"
						placeholder="please input number"
						name="def"
						value={formValue.def}
						onChange={onInputChange}
					/>
				</div>
				<div className="form-row">
					<label>Mana (0 a 10)</label>
					<Input
						type="number"
						placeholder="please input number"
						name="mana"
						value={formValue.mana}
						onChange={onInputChange}
					/>
				</div>
				<div className="form-row">
					<label>Escolha o tipo*</label>
					<CustomSelect
						name="type"
						value={''}
						onChange={onChange}
						options={Type}
					/>
				</div>
				<div className="form-row">
					<label>Escolha a classe*</label>
					<CustomSelect
						value={''}
						name="class"
						onChange={onChange}
						options={Class}
					/>
				</div>
				<div className="form-row">
					<Button title="Adicionar card" height="45px" width="100px" />
				</div>
			</form>
		</Div>
	);
};
export default CreateCard;
