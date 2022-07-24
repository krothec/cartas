import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Class, Type } from '../../assets';
import Button from '../../components/button';
import Card from '../../components/card';
import Input from '../../components/input';
import CustomSelect from '../../components/select';
import { CardsContext } from '../../context/cardsContext';
import { ICard } from '../../interface';
import { CreateDiv, Div } from './style';

interface IProps {
	card: ICard;
	onUpdateCard?: (card: ICard) => void;
}

export default function EditCardForm(props: IProps) {
	const context = useContext(CardsContext);
	const [card, setCard] = useState(props.card);

	useEffect(() => {
		setCard(context.card);
	}, [context.card]);

	useEffect(() => {
		if (context.route !== 'edit') context.setRoute('edit');
	}, [context]);

	const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		debugger;
		context.setCard(card);
	};
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		debugger;
		setCard({ ...card, [name]: value });
	};
	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		let color: string = '';
		if (name === 'class') {
			const filteredClass = Class.filter(i => i.value === value);
			color = filteredClass[0].id.toString();
			setCard({ ...card, [name]: value, color: color });
		} else setCard({ ...card, [name]: value });
	};
	return (
		<Div className="Create Card">
			<CreateDiv className="card-form">
				<div className="user-form">
					<h1>Editar Carta</h1>
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
								value={card.name}
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
								value={card.description}
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
								value={card.attack}
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
								value={card.def}
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
								value={card.mana}
								onChange={onInputChange}
								padding="8px"
								radius="25px"
								border="solid 0.5px black"
								width="288px"
							/>
						</div>
						<div className="form-row">
							<Button
								title="Editar card"
								height="60px"
								width="140px"
								radius="50px"
							/>
						</div>
					</form>
				</div>
			</CreateDiv>
			<Card card={card} height="210px" />
		</Div>
	);
}
