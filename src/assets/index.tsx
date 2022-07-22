import { ICard, IClass, IType } from '../interface';

export const defaultDeck: Array<ICard> = [
	{
		id: 1,
		name: 'Classe',
		description: 'descrição de paladino',
		attack: 5,
		def: 7,
		type: 1,
		mana: 10,
		class: 'Paladino',
		image: 'src/assets/images/paladin.png',
		color: '#ffd700',
	},
	{
		id: 2,
		name: 'Classe',
		description: 'descrição de paladino',
		attack: 5,
		def: 7,
		type: 1,
		mana: 10,
		class: 'Paladino',
		image: '//imgur.com/F8aJBgg',
		color: '#ffd700',
	},
	{
		id: 3,
		name: 'Classe',
		description: 'descrição de Mago',
		attack: 8,
		def: 2,
		type: 2,
		mana: 10,
		class: 'Mago',
		image: '//imgur.com/2Kush7b',
		color: '#4169e1',
	},
	{
		id: 4,
		name: 'Classe',
		description: 'descrição de Mago',
		attack: 7,
		def: 3,
		type: 2,
		mana: 10,
		class: 'Mago',
		image: '//imgur.com/2Kush7b',
		color: '#4169e1',
	},
	{
		id: 5,
		name: 'Classe',
		description: 'descrição de Caçador',
		attack: 6,
		def: 3,
		type: 3,
		mana: 10,
		class: 'Caçador',
		image: '//imgur.com/a/7bpa3zV',
		color: '#8b4513',
	},
	{
		id: 6,
		name: 'Classe',
		description: 'descrição de Caçador',
		attack: 7,
		def: 3,
		type: 3,
		mana: 10,
		class: 'Caçador',
		image: '//imgur.com/a/7bpa3zV',
		color: '#8b4513',
	},
	{
		id: 7,
		name: 'Classe',
		description: 'descrição de Druida',
		attack: 6,
		def: 3,
		type: 4,
		mana: 10,
		class: 'Druida',
		image: '//imgur.com/a/FAdt3rT',
		color: '#228b22',
	},
	{
		id: 8,
		name: 'Classe',
		description: 'descrição de Druida',
		attack: 7,
		def: 3,
		type: 4,
		mana: 10,
		class: 'Druida',
		image: '//imgur.com/a/FAdt3rT',
		color: '#228b22',
	},
	{
		id: 9,
		name: 'Criatura',
		description: 'descrição de Criatura',
		attack: 6,
		def: 3,
		type: 1,
		mana: 10,
		class: 'Qualquer',
		image: '',
		color: '#8e9598',
	},
	{
		id: 10,
		name: 'Criatura',
		description: 'descrição de Criatura',
		attack: 7,
		def: 3,
		type: 2,
		mana: 10,
		class: 'Qualquer',
		image: '',
		color: '#8e9598',
	},
	{
		id: 11,
		name: 'Magia',
		description: 'descrição de Magia',
		attack: 6,
		def: 3,
		type: 1,
		mana: 10,
		class: 'Magia',
		image: '',
		color: '#663399',
	},
	{
		id: 12,
		name: 'Magia',
		description: 'descrição de Magia',
		attack: 7,
		def: 3,
		type: 2,
		mana: 10,
		class: 'Magia',
		image: '',
		color: '#663399',
	},
];

export const Type: Array<IType> = [
	{
		id: 0,
		value: '',
		label: '',
	},
	{
		id: 1,
		value: 'magic',
		label: 'Magia',
	},
	{
		id: 2,
		value: 'creature',
		label: 'Criatura',
	},
];
export const Class: Array<IClass> = [
	{
		id: 0,
		value: '',
		label: '',
	},
	{
		id: 1,
		value: 'mage',
		label: 'Mago',
	},
	{
		id: 2,
		value: 'paladin',
		label: 'Paladino',
	},
	{
		id: 3,
		value: 'hunter',
		label: 'Caçador',
	},
	{
		id: 4,
		value: 'druid',
		label: 'Druida',
	},
	{
		id: 5,
		value: 'others',
		label: 'Qualquer',
	},
];
