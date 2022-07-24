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
	onEditCard: (editedCard: ICard) => void;
	onSearchCard: (e: React.ChangeEvent<HTMLInputElement>) => void;
	route?: string;
	setRoute: (route: string) => void;
};

const initialValue = {
	listCards: defaultCards,
	card: {
		id: 0,
		name: '',
		description: '',
		attack: 0,
		def: 0,
		type: '',
		class: '',
		mana: 0,
	},
	setNewDeck: () => {},
	setRoute: () => {},
	setCard: () => {},
	onDeleteCard: (id: number) => {},
	onEditCard: (editedCard: ICard) => {},
	onSearchCard: (e: React.ChangeEvent<HTMLInputElement>) => {},
};

export const CardsContext = createContext<CardsContextType>(initialValue);

export const CardsContextProvider = ({ children }: CardsContextProps) => {
	const [selectedType, setSelectedType] = React.useState<IType>(Type[0]);
	const [selectedClass, setSelectedClass] = React.useState<IClass>(Class[0]);
	const [listCards, setListCards] = useState(defaultDeck);
	const [card, onSetCard] = useState(initialValue.card);
	const [route, setRoute] = useState('');
	const navigate = useNavigate();

	const setCard = (newCard: ICard) => {
		let result: ICard[];
		if (route === 'edit') {
			debugger;
			result = listCards.filter(card => {
				return card.id === newCard.id;
			});
			let idx = listCards.indexOf(result[0]);
			if (idx >= 0) {
				listCards.splice(idx, 1);
				setListCards([...listCards, newCard]);
			}
		} else {
			setListCards([...listCards, newCard]);
		}
		setRoute('');
		navigate('/');
	};

	const setNewDeck = () => {};

	const onDeleteCard = (id: number) => {
		setListCards(listCards.filter(i => i.id !== id));
	};

	const onEditCard = (editedCard: ICard) => {
		onSetCard(editedCard);
		setRoute('edit');
		navigate('edit/');
	};

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
				route,
				setRoute,
			}}
		>
			{children}
		</CardsContext.Provider>
	);
};
