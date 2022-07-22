export interface ICard {
	id: number;
	name: string;
	description: string;
	attack: number;
	def: number;
	type: number;
	class: string;
	image?: string;
	color?: string;
	mana: number;
}

export interface IType {
	id: number;
	value: string;
	label: string;
}
export interface IClass {
	id: number;
	value: string;
	label: string;
}
