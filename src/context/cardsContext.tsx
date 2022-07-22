import React, { createContext, useState, ReactNode } from 'react';
import { Type, Class, defaultDeck } from '../assets';
import { ICard, IClass, IType } from '../interface/';
import { useNavigate } from 'react-router-dom';

const defaultCards: Array<ICard> = [];

type CardsContextProps = {
	children: ReactNode;
};

type CardsContextType = {
	listCards: ICard[];
	card: ICard;
	selectedType?: IType;
	selectedClass?: IClass;
	setNewDeck: () => void;
	setCard: (newCard: ICard) => void;
	setSelectedType?: (newType: IType) => void;
	setSelectedClass?: (newClass: IClass) => void;
	onDeleteCard: (id: number) => void;
	onEditCard: (id: number) => void;
	onSearchCard: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const initialValue = {
	listCards: defaultCards,
	card: {
		id: 0,
		name: '',
		description: '',
		attack: 0,
		def: 0,
		type: 0,
		class: '',
		mana: 0,
	},
	setNewDeck: () => {},
	setCard: () => {},
	onDeleteCard: (id: number) => {},
	onEditCard: (id: number) => {},
	onSearchCard: (e: React.ChangeEvent<HTMLInputElement>) => {},
};

export const CardsContext = createContext<CardsContextType>(initialValue);

export const CardsContextProvider = ({ children }: CardsContextProps) => {
	const [selectedType, setSelectedType] = React.useState<IType>(Type[0]);
	const [selectedClass, setSelectedClass] = React.useState<IClass>(Class[0]);
	const [listCards, setListCards] = useState(defaultDeck);
	const [card, setCard2] = useState(initialValue.card);
	const navigate = useNavigate();

	const setCard = (newCard: ICard) => {
		debugger;
		setListCards([...listCards, newCard]);
		navigate('/');
	};

	const setNewDeck = () => {};

	const onDeleteCard = (id: number) => {
		setListCards(listCards.filter(i => i.id !== id));
	};

	const onEditCard = (id: number) => {};

	const onSearchCard = (e: React.ChangeEvent<HTMLInputElement>) => {
		const keyword = e.target.value.toLowerCase();
		if (keyword !== '') {
			const result = listCards.filter(card => {
				return card.class.toLowerCase().startsWith(keyword.toLowerCase());
			});
			setListCards(result);
		} else {
			setListCards(defaultDeck);
		}
	};

	return (
		<CardsContext.Provider
			value={{
				listCards,
				card,
				setNewDeck,
				setCard,
				selectedType,
				setSelectedType,
				selectedClass,
				setSelectedClass,
				onDeleteCard,
				onEditCard,
				onSearchCard,
			}}
		>
			{children}
		</CardsContext.Provider>
	);
};
