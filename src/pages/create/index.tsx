import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ICard } from '../../interface';
import Input from '../../components/input';
import Button from '../../components/button';
import { CardsContext } from '../../context/cardsContext';
import CustomSelect from '../../components/select';
import { Type, Class } from '../../assets';
import { Div, CreateDiv } from './style';
import Card from '../../components/card';

interface IProps {
	onAddCard?: (card: ICard) => void;
}

const initCard = {
	id: 0,
	name: '',
	description: '',
	attack: 0,
	def: 0,
	type: '',
	class: '',
	image: '',
	mana: 0,
	color: '',
};

const CreateCard: React.FunctionComponent<IProps> = props => {
	const context = useContext(CardsContext);
	const [formValue, setFormValue] = useState(initCard);

	useEffect(() => {
		if (context.route !== 'create') context.setRoute('create');
	}, [context]);

	const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		context.setCard(formValue);
	};

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		let color: string = '';
		if (name === 'class') {
			const filteredClass = Class.filter(i => i.value === value);
			color = filteredClass[0].id.toString();
			setFormValue({ ...formValue, [name]: value, color: color });
		} else setFormValue({ ...formValue, [name]: value });
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormValue({ ...formValue, [name]: value });
	};
	return (
		<Div className="Create Card">
			<CreateDiv className="card-form">
				<h1>Forjar Card</h1>
				<form className="form-edit" onSubmit={onFormSubmit}>
					<div className="form-row">
						<label>Escolha a classe*</label>
						<CustomSelect
							value={''}
							name="class"
							onChange={onChange}
							options={Class}
							color=""
							width="300px"
							padding="6px"
							borderRadius="25px"
						/>
					</div>
					<div className="form-row">
						<label>Escolha o tipo*</label>
						<CustomSelect
							name="type"
							value={''}
							onChange={onChange}
							options={Type}
							color=""
							width="300px"
							padding="6px"
							borderRadius="25px"
						/>
					</div>
					<div className="form-row">
						<label>Nome</label>
						<Input
							type="text"
							placeholder="Nome da carta"
							name="name"
							value={formValue.name}
							onChange={onInputChange}
							padding="8px"
							radius="25px"
							width="288px"
							border="solid 0.5px black"
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
							padding="8px"
							radius="25px"
							border="solid 0.5px black"
							width="288px"
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
							padding="8px"
							radius="25px"
							border="solid 0.5px black"
							width="288px"
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
							padding="8px"
							radius="25px"
							border="solid 0.5px black"
							width="288px"
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
							padding="8px"
							radius="25px"
							border="solid 0.5px black"
							width="288px"
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
							padding="8px"
							radius="25px"
							border="solid 0.5px black"
							width="288px"
						/>
					</div>
					<div className="form-row">
						<Button
							title="Adicionar card"
							height="60px"
							width="140px"
							radius="50px"
						/>
					</div>
				</form>
			</CreateDiv>
			<Card card={formValue} height="210px" />
		</Div>
	);
};
export default CreateCard;
