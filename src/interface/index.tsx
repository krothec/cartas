export interface ICard {
	id: number;
	name: string;
	description: string;
	attack: number;
	def: number;
	type: string;
	class: string;
	image?: string;
	color?: string;
	mana: number;
}

export interface IType {
	id: string;
	value: string;
	label: string;
}
export interface IClass {
	id: string;
	value: string;
	label: string;
}
