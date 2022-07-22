import React, { ChangeEvent } from 'react';

export interface Option {
	id: number;
	value: string;
	label: string;
}

export interface BaseProps {
	options: Option[];
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	value: string;
	name: string;
}

const CustomSelect: React.FC<BaseProps> = ({
	onChange,
	options,
	value,
	name,
}: BaseProps) => {
	return (
		<select onChange={onChange} name={name}>
			{options.map((op: Option) => (
				<option key={op.id.toString()} value={op.value}>
					{op.label}
				</option>
			))}
		</select>
	);
};

export default CustomSelect;
