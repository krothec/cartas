import React, { ChangeEvent } from 'react';

export interface Option {
	value: string;
	label: string;
	color?: string;
	width?: string;
	padding?: string;
	borderRadius?: string;
}

export interface BaseProps {
	options: Option[];
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	value: string;
	name: string;
	color?: string;
	width?: string;
	padding?: string;
	borderRadius?: string;
}

const CustomSelect: React.FC<BaseProps> = ({
	onChange,
	options,
	value,
	name,
	color,
	width,
	padding,
	borderRadius,
}: BaseProps) => {
	return (
		<select
			onChange={onChange}
			name={name}
			style={{
				width: `${width}`,
				padding: `${padding}`,
				borderRadius: `${borderRadius}`,
			}}
		>
			{options.map((op: Option) => (
				<option key={op.color?.toString()} value={op.value} color={op.color}>
					{op.label}
				</option>
			))}
		</select>
	);
};

export default CustomSelect;
